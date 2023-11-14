package ru.rogov.ws;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketMessage;
import reactor.core.publisher.Mono;
import ru.rogov.model.Visitor;
import ru.rogov.service.VisitorService;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class MsgProcessor {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final Set<SessionState> subscribers = ConcurrentHashMap.newKeySet();

    VisitorService visitorService;

    @Autowired
    public MsgProcessor(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    public void process(SessionState sessionState, WebSocketMessage webSocketMessage, String name) {
        try {
            Message message = objectMapper.readValue(webSocketMessage.getPayloadAsText(), Message.class);
            switch (message.getType()) {
                case HANDSHAKE_REQUEST:
                    addSubscriber(sessionState);
                    System.out.println("отправляю одному");
                    Visitor vis = visitorService.findVisitor(name);
                    Message<Visitor> msg1 = new Message<>(MessageType.HANDSHAKE_RESPONSE, vis);
                    sessionState.sendAsText(msg1);
                    break;
                case CHAT_MESSAGE:
                    System.out.println("отправляю всем");
                    ChatMessage body = new ChatMessage("2023-11-15", "Alex", "Hello world");
                    Message<ChatMessage> msg2 = new Message<>(MessageType.CHAT_MESSAGE, body);
                    sendToEveryone(msg2);
                    break;
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    public void addSubscriber(SessionState sessionState) {
        subscribers.add(sessionState);
    }

    public void sendToEveryone(Message<?> message) {
        subscribers.forEach(o -> {
            if (o.getSession().isOpen()) {
                o.sendAsText(message);
            } else {
                subscribers.remove(o);
                System.out.println("Удалил не живую подписку на чат-рассылку");
            }
        });
    }
}
