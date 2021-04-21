DROP DATABASE if exists employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE department
(
id INT NOT NULL AUTO_INCREMENT,
name varchar(30),
PRIMARY KEY(id)
);

CREATE TABLE roles
(
id INT NOT NULL AUTO_INCREMENT,
title varchar(30),
salary decimal(30),
department_id int,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee
(
id INT NOT NULL AUTO_INCREMENT,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);




