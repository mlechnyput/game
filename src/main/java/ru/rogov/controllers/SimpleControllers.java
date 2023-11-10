package ru.rogov.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

@Controller
public class SimpleControllers {
    @GetMapping("/foradmin")
    public Mono<String> adm() {
        return Mono.just("index.html");
    }
}
