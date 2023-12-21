package ru.rogov.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "mails")
public class Mail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column
    String sender;

    @Column
    String message;

}
