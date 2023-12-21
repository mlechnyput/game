package ru.rogov.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.rogov.model.Mail;
import ru.rogov.repo.MailDao;

@Service
public class MailService {

    MailDao mailDao;

    @Autowired
    public MailService(MailDao mailDao) {
        this.mailDao = mailDao;
    }

    public String addMail(Mail mail) {
        Mail saved = mailDao.save(mail);
        if (saved.getId() > 0) {
            return "success";
        }
        return "failed";
    }
}
