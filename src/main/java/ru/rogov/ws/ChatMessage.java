package ru.rogov.ws;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ChatMessage {
    String time;
    String author;
    String msg;
}
