SHOW DATABASES;
USE practice;
SHOW TABLES;
CREATE TABLE A(
    id VARCHAR(8) PRIMARY KEY,
    name VARCHAR(1) NOT NULL,
    age INT NOT NULL
);
DESC A;
INSERT INTO A VALUES('20115544','a',34);
INSERT INTO A VALUES('20156677','b',31);
INSERT INTO A VALUES('20227755','c',25);
INSERT INTO A VALUES('20232223','d',23);
INSERT INTO A VALUES('20201144','e',23);
INSERT INTO A VALUES('20145145','f',30);
INSERT INTO A VALUES('20180919','g',26);
SELECT * from A;

CREATE TABLE B(
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(1) NOT NULL,
    age INT NOT NULL
);
DESC B;
DROP TABLE B;
INSERT INTO B VALUES('2022091994','h',29);
INSERT INTO B VALUES('2020101021','i',23);
INSERT INTO B VALUES('2018187566','j',26);
CREATE TABLE application_subject(
    신청id INT PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(20) NOT NULL,
    subject VARCHAR(6) NOT NULL
);
DROP TABLE application_subject;
INSERT INTO application_subject VALUES (NULL, '20115544','네트워크');
INSERT INTO application_subject VALUES (NULL, '20115544','알고리즘');
INSERT INTO application_subject VALUES (NULL, '20156677','알고리즘');
INSERT INTO application_subject VALUES (NULL, '20227755','네트워크');
INSERT INTO application_subject VALUES (NULL, '20232223','C언어');
INSERT INTO application_subject VALUES (NULL, '20145145','캡스톤');
INSERT INTO application_subject VALUES (NULL, '20180919','캡스톤');
INSERT INTO application_subject VALUES (NULL, '20180919','C언어');
INSERT INTO application_subject VALUES (NULL, '20180919','네트워크');
INSERT INTO application_subject VALUES (NULL, '2022091994','C언어');
INSERT INTO application_subject VALUES (NULL, '2022091994','캡스톤');
INSERT INTO application_subject VALUES (NULL, '2022091994','웹프레임워크');
INSERT INTO application_subject VALUES (NULL, '2018187566','C언어');
INSERT INTO application_subject VALUES (NULL, '2018187566','네트워크');
INSERT INTO application_subject VALUES (NULL, '2018187566','캡스톤');

SELECT * FROM application_subject;

SELECT *
FROM A, application_subject
WHERE A.id=application_subject.id;

SELECT *
FROM A LEFT OUTER JOIN application_subject
    ON A.id=application_subject.id;

SELECT *
FROM A RIGHT OUTER JOIN application_subject
    ON A.id=application_subject.id;
