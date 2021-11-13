DROP DATABASE IF EXISTS biz;
CREATE DATABASE biz;
USE biz;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;


CREATE TABLE department (
    dept_id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE positions (
    position_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    position_title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,3) NOT NULL,
    dept_id INTEGER,
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES department(dept_id) ON DELETE SET NULL
); 

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    position INTEGER
    -- manager_id VARCHAR(30) SELECT 
);


