package ru.rogov.ws;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Message<T> {
    private MessageType type;
    private T body;
}
