package ru.rogov.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import ru.rogov.model.Visitor;
import ru.rogov.service.VisitorService;

@RestController
public class RestControllers {

    VisitorService visitorService;

    @Autowired
    public RestControllers(VisitorService visitorService) {
        this.visitorService = visitorService;
    }

    @GetMapping("/")
    public Iterable<Visitor> index() {
        return visitorService.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<String> reg(@RequestBody Visitor visitor) {
        if (visitorService.checkAndSave(visitor).equals("busy")) {
            return new ResponseEntity<>("busy", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
    }
}