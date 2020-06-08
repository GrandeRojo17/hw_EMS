DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db; --this is a query statement
USE employeeTracker_db;

--Create an object of type department with fields ID and name
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
);
CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL,

title VARCHAR(30) NOT NULL,
salary INTEGER(30) NOT NULL,
department_id INTEGER
);
CREATE TABLE employee (
id INTEGER NOT NULL,
firstName VARCHAR(30),
LastName VARCHAR(30),
role_id INTEGER(30),
manager_id INTEGER(30) DEFAULT 'none',
);
INSERT INTO department(id,name)
VALUES (01,"Human Resources")