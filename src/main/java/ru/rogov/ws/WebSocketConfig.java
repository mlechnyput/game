package ru.rogov.ws;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.buffer.NettyDataBufferFactory;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.http.server.reactive.ServerHttpResponseDecorator;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.web.reactive.HandlerAdapter;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.HandshakeInfo;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.adapter.ReactorNettyWebSocketSession;
import org.springframework.web.reactive.socket.server.RequestUpgradeStrategy;
import org.springframework.web.reactive.socket.server.support.HandshakeWebSocketService;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import reactor.netty.http.server.HttpServerResponse;
import reactor.netty.http.server.WebsocketServerSpec;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

@Configuration
//@EnableWebFlux
//@AllArgsConstructor
@RequiredArgsConstructor
public class WebSocketConfig implements WebFluxConfigurer {

    @Value("${spring.config.maxFrameSize}")
    private String maxFrameSize;

    /**
     * Стратегия для сессии
     */
    private class CustomReactorNettyRequestUpgradeStrategy implements RequestUpgradeStrategy {

        @Override
        @NonNull
        public Mono<Void> upgrade(ServerWebExchange exchange,
                                  @NonNull WebSocketHandler handler,
                                  String subProtocol,
                                  Supplier<HandshakeInfo> handshakeInfoFactory) {

            ServerHttpResponse response = exchange.getResponse();
            HttpServerResponse reactorResponse = ServerHttpResponseDecorator.getNativeResponse(response);
            HandshakeInfo handshakeInfo = handshakeInfoFactory.get();
            NettyDataBufferFactory bufferFactory = (NettyDataBufferFactory) response.bufferFactory();
            URI uri = exchange.getRequest().getURI();
            // Trigger WebFlux preCommit actions and upgrade
            return response.setComplete()
                    .then(Mono.defer(() -> {
                        WebsocketServerSpec spec =
                                WebsocketServerSpec.builder()
                                        .maxFramePayloadLength(Integer.parseInt(maxFrameSize))
                                        .build();
                        return reactorResponse.sendWebsocket((in, out) -> {
                            ReactorNettyWebSocketSession session =
                                    new ReactorNettyWebSocketSession(
                                            in, out, handshakeInfo, bufferFactory, spec.maxFramePayloadLength());
                            return handler.handle(session).checkpoint(uri + " [CustomReactorNettyRequestUpgradeStrategy]");
                        }, spec);
                    }));
        }
    }

    private final WsHandler wsHandler;

    @Bean
    public HandlerAdapter wsHandlerAdapter() {
        return new WebSocketHandlerAdapter(
                new HandshakeWebSocketService(
                        new CustomReactorNettyRequestUpgradeStrategy()
                )
        );
    }

    @Bean
    public HandlerMapping webSocketHandlerMapping() {
        Map<String, WebSocketHandler> map = new HashMap<>();
        map.put("/chat",wsHandler);
        int order = -1; // before annotated controllers

        return new SimpleUrlHandlerMapping(map, order);
    }
}