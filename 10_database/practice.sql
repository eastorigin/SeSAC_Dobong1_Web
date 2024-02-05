CREATE DATABASE practice CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;
SHOW DATABASES;
USE practice;
CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotioin VARCHAR(2) DEFAULT 'x'
 );
 SHOW TABLES;
 DESC member;
 DROP TABLE member;
 ALTER TABLE member MODIFY id VARCHAR(10);
 ALTER TABLE member DROP COLUMN age;
 ALTER TABLE member ADD interest VARCHAR(100);
 CREATE table user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT NOT NULL DEFAULT 0
 );
 DESC user;
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('hong1234','8o4bkg','홍길동','M','1990-01-31',33);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('sexysung','87awjkdf','성춘향','F','1992-03-31',31);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('power70','qxur8sda','변사또','M','1970-05-02',53);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('hanjo','jk48fn4','한조','M','1984-10-18',39);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('widowmaker','38ewifh3','위도우','F','1976-06-27',47);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('dvadva','k3f3ah','송하나','F','2001-06-03',22);
 INSERT INTO user (id,pw,name,gender,birthday,age) VALUES('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);
 SELECT * FROM user;

--  1번
SELECT * FROM user ORDER BY birthday;
-- 2번
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
-- 3번
SELECT id, name FROM user WHERE birthday LIKE '199%';
-- 4번
SELECT * FROM user WHERE birthday LIKE '%06%';
-- 5번
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
-- 6번
SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 7번
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
-- 8번
UPDATE user set pw='12345678' WHERE id='hong1234';
-- 9번
DELETE FROM user WHERE id='jungkrat';