package ru.rogov.repo;

//import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rogov.model.Visitor;

import java.util.List;

@Repository
public interface VisitorDao extends CrudRepository<Visitor, Long> {
    Visitor findVisitorByUsername(String username);
    List<Visitor> findTop10ByOrderByScoreDesc();
}
