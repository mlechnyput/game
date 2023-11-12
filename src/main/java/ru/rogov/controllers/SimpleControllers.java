package ru.rogov.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

@Controller
public class SimpleControllers {
    @GetMapping("/")
    public Mono<String> main() {
        return Mono.just("index.html");
    }

    @GetMapping("/come")
    public Mono<String> come() {
        return Mono.just("custom_login.html");
    }

    @GetMapping("/register")
    public Mono<String> register() {
        return Mono.just("custom_register.html");
    }
}
