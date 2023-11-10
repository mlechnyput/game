package ru.rogov.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import ru.rogov.model.Visitor;
import ru.rogov.service.VisitorService;

@RestController
public class Controllers {

    VisitorService visitorService;

    @Autowired
    public Controllers(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    @GetMapping("/")
    public Iterable<Visitor> index() {
        return visitorService.findAll();
    }
}