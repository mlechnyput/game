package ru.rogov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import ru.rogov.model.Authority;
import ru.rogov.model.Visitor;
import ru.rogov.repo.AuthorityDao;
import ru.rogov.repo.VisitorDao;

import java.util.List;

@Service
public class VisitorService implements ReactiveUserDetailsService {

    VisitorDao visitorDao;
    AuthorityDao authorityDao;

    @Autowired
    public VisitorService(VisitorDao visitorDao, AuthorityDao authorityDao) {
        this.visitorDao = visitorDao;
        this.authorityDao = authorityDao;
    }

    @Transactional
    public Iterable<Visitor> findAll() {
        return visitorDao.findAll();
    }

    @Transactional
    public String checkAndSave(Visitor visitor) {
        Visitor checkedInDb = visitorDao.findVisitorByUsername(visitor.getUsername());
        if (checkedInDb == null) {
            Authority auth = authorityDao.findAuthorityByRole("ROLE_USER");
            visitor.setAuthority(auth);
            Visitor saved = visitorDao.save(visitor);
            System.out.println(saved.getUsername() + " saved to DB with id=" + saved.getId());
            return "saved";
        } else {
            System.out.println(visitor.getUsername() + " is busy on id=" + checkedInDb.getId());
            return "busy";
        }
    }

    @Override
    public Mono<UserDetails> findByUsername(String username) {
        Mono<Visitor> mono = Mono.just(visitorDao.findVisitorByUsername(username));
        return mono.cast(UserDetails.class);
    }

    public Visitor findVisitor(String username) {
        return visitorDao.findVisitorByUsername(username);
    }

    public Visitor updateVisitor(Visitor v) {
        return visitorDao.save(v);
    }

    public List<Visitor> getTenWinners(){
        return visitorDao.findTop10ByOrderByScoreDesc();
    }
}
