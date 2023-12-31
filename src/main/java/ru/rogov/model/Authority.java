package ru.rogov.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "authority")
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column
    String role;
}
