package ru.rogov.ws;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Sinks;

import java.security.Principal;

@Component
public class WsHandler implements WebSocketHandler {

    private final MsgProcessor msgProcessor;

    @Autowired
    public WsHandler(MsgProcessor msgProcessor) {
        this.msgProcessor = msgProcessor;
    }

    @Override
    @NonNull
    public Mono<Void> handle(@NonNull WebSocketSession session) {
        Sinks.Many<WebSocketMessage> sink = Sinks.many().unicast().onBackpressureError();
        SessionState sessionState = new SessionState(session, sink);
        Mono<Principal> principal = session.getHandshakeInfo().getPrincipal();

        Mono<Void> input = principal.map(Principal::getName)
                .flatMap(s -> {
                    return session.receive().doOnNext(msg -> {
                    msgProcessor.process(sessionState, msg, s);
                }).then();
        });

        Mono<Void> output = session.send(
                sink.asFlux()
                        .onBackpressureBuffer()
                        .doOnError(Throwable::printStackTrace)
        );

        return Mono.zip(input, output).then();
    }
}
