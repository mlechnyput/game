package ru.rogov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ru.rogov.model.Visitor;
import ru.rogov.repo.VisitorDao;

@Service
public class VisitorService implements ReactiveUserDetailsService {

    VisitorDao visitorDao;

    @Autowired
    public VisitorService(VisitorDao visitorDao) {
        this.visitorDao = visitorDao;
    }

    @Transactional
    public Iterable<Visitor> findAll() {
        return visitorDao.findAll();
    }

    @Override
    public Mono<UserDetails> findByUsername(String username) {
        Mono<Visitor> mono = Mono.just(visitorDao.findVisitorByUsername(username));
        return mono.cast(UserDetails.class);
    }
}
