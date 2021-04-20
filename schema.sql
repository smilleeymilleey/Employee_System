DROP DATABASE if exists employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;


CREATE TABLE employee
(
id INT NOT NULL AUTO_INCREMENT,
last_name varchar(30),
first_name varchar(30),
role_id int(10),
manager_id int (20),
PRIMARY KEY (id)
);






UPDATE
employee
SET 
first_name  = "ROB",
last_name = "ROBERTON",

WHERE 
id = 2



CREATE TABLE roles
(
id INT NOT NULL AUTO_INCREMENT,
title varchar(30),
salary decimal(30),
department_id int(10),
PRIMARY KEY (id)
);

CREATE TABLE department
(
id INT NOT NULL AUTO_INCREMENT,
name varchar(30),
PRIMARY KEY(id)
);
