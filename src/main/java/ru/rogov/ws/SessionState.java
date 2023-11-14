package ru.rogov.ws;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Sinks;

public class SessionState {
    private final Sinks.Many<WebSocketMessage> sink;
    private final WebSocketSession session;

    public SessionState(WebSocketSession session, Sinks.Many<WebSocketMessage> sink) {
        this.sink = sink;
        this.session = session;
    }

    public Sinks.Many<WebSocketMessage> getSink() {
        return sink;
    }

    public WebSocketSession getSession() {
        return session;
    }

    public void sendAsText(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            sink.tryEmitNext(session.textMessage(mapper.writeValueAsString(object)));
        } catch (JsonProcessingException e) {
            System.out.println("Ошибка сериализации сообщения");
        }
    }
}