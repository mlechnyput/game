package ru.rogov.repo;

//import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rogov.model.Authority;
import ru.rogov.model.Visitor;

@Repository
public interface AuthorityDao extends CrudRepository<Authority, Long> {
    Authority findAuthorityByRole(String role);
}
