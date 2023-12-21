package ru.rogov.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.rogov.model.Mail;

@Repository
public interface MailDao extends CrudRepository<Mail, Long> {
}
