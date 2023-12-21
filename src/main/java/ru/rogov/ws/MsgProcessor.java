package ru.rogov.ws;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;
import ru.rogov.model.Mail;
import ru.rogov.model.Visitor;
import ru.rogov.service.MailService;
import ru.rogov.service.VisitorService;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class MsgProcessor {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private static final Map<WebSocketSession, SessionState> subscribers = new ConcurrentHashMap<>();

    VisitorService visitorService;
    MailService mailService;

    @Autowired
    public MsgProcessor(VisitorService visitorService, MailService mailService) {
        this.visitorService = visitorService;
        this.mailService = mailService;
    }

    public void process(SessionState sessionState, WebSocketMessage webSocketMessage, String name) {
        try {
            Message message = objectMapper.readValue(webSocketMessage.getPayloadAsText(), Message.class);
            switch (message.getType()) {
                case HANDSHAKE_REQUEST:
                    addSubscriber(sessionState);
                    System.out.println("прилетел handshake");
                    Visitor vis = visitorService.findVisitor(name);
                    Message<Visitor> handshakeMsg = new Message<>(MessageType.HANDSHAKE_RESPONSE, vis);
                    sessionState.sendAsText(handshakeMsg);
                    break;
                case CHAT_MESSAGE:
                    System.out.println("прилетело чат-сообщение");
                    sendToEveryone(message);
                    break;
                case CHANGE_SCORE_REQUEST:
                    System.out.println("прилетел запрос на увеличение баллов");
                    Visitor vis_1 = objectMapper.readValue(objectMapper.writeValueAsString(message.getBody()), Visitor.class);
                    /**
                     * vis_1 содержит кол-во баллов, которые надо добавить визитору
                     * */
                    Visitor vis_1_from_DB = visitorService.findVisitor(vis_1.getUsername());
                    int increased_score = vis_1_from_DB.getScore() + vis_1.getScore();
                    vis_1_from_DB.setScore(increased_score);
                    Visitor updated = visitorService.updateVisitor(vis_1_from_DB);
                    Message<Visitor> changeScoreResp = new Message<>(MessageType.CHANGE_SCORE_RESPONSE, updated);
                    sessionState.sendAsText(changeScoreResp);
                    break;
                case GET_WINNERS_REQUEST:
                    List<Visitor> winners = visitorService.getTenWinners();
                    Message<List<Visitor>> winnersResp = new Message<>(MessageType.GET_WINNERS_RESPONSE, winners);
                    sessionState.sendAsText(winnersResp);
                    break;
                case ADD_MAIL_REQUEST:
                    Mail mail = objectMapper.readValue(objectMapper.writeValueAsString(message.getBody()), Mail.class);
                    String str = mailService.addMail(mail);
                    Message<String> addMailResp = new Message<>(MessageType.ADD_MAIL_RESPONSE, str);
                    sessionState.sendAsText(addMailResp);
                    break;
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    public static Map<WebSocketSession, SessionState> getSubscribers() {
        return subscribers;
    }

    public void addSubscriber(SessionState sessionState) {
        subscribers.put(sessionState.getSession(), sessionState);
        int quantity = subscribers.size();
        Message<Integer> quantityMsg = new Message<>(MessageType.QUANTITY_OF_VISITORS, quantity);
        sendToEveryone(quantityMsg);
    }

    public void sendToEveryone(Message<?> message) {
        subscribers.forEach((k, v) -> {
            v.sendAsText(message);
        });
    }
}
