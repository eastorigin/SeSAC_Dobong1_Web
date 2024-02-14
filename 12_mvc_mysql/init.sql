-- Active: 1707101283066@@127.0.0.1@3306@dobong
show TABLES;

CREATE Table visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);

drop TABLE visitor;
DESC visitor;

INSERT INTO visitor(name, comment) VALUES('sdw','좋은 하루입니다');
INSERT INTO visitor VALUES(NULL, '홍길동','안녕하세요');

SELECT * from visitor;

#[DCL]

-- 새로운 USER 만들기1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면!

-- 새로운 USER 만들기2
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB 에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여
FLUSH PRIVILEGES;
-- 현재 사용중인 SQL 캐시를 지우고 새로운 설정 적용

SELECT * FROM mysql.user;