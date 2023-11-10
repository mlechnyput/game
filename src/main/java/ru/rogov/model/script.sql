create table visitors
(
    id           serial,
    login        varchar(50)  not null,
    password     varchar(255) not null,
    authority_id integer      not null,
    level        integer      not null,
    score        integer      not null,
    constraint visitors_pk primary key (id),
    constraint authority_fk foreign key (authority_id) references authority (id)
);

drop table visitors;

create table authority
(
    id   serial,
    role varchar(50) not null,
    constraint authority_pk primary key (id)
);

insert into authority(role) values ('ROLE_USER');
insert into authority(role) values ('ROLE_ADMIN');
insert into visitors(login, password, authority_id,level,score) values ('Alex','123',2,0,0);
insert into visitors(login, password, authority_id,level,score) values ('Elena','456',1,0,0);
insert into visitors(login, password, authority_id,level,score) values ('Leo','789',1,0,0);