CREATE DATABASE Employee 

CREATE TABLE Persons
(
Id INT NOT NULL AUTO_INCREMENT,,
LastName varchar(30),
FirstName varchar(30),
Role_Id int(10),
Manager_Id int (20),
PRIMARY KEY (Id)
);

INSERT INTO Employee (LastName, FirstName, Role_Id)
VALUES ("Bob", "Bobberton", 100);