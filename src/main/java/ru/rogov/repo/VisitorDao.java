package ru.rogov.repo;

//import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rogov.model.Visitor;

@Repository
public interface VisitorDao extends CrudRepository<Visitor, Long> {
    Visitor findVisitorByUsername(String username);
}
