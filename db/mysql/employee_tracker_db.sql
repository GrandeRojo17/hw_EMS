DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;
USE employees_DB;


CREATE TABLE department
(
    id INT
    AUTO_INCREMENT PRIMARY KEY,
name VARCHAR
    (30) UNIQUE NOT NULL,
);
    CREATE TABLE role
    (
        id INT
        UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR
        (30) NOT NULL,
        salary Decimal UNSIGNED NOT NULL,
        department_id INT UNSIGNED NOT NULL
        INDEX dep_ID
        (department_id),
        CONSTRAINT fk_department Foreign KEY
        (department_id) REFERENCES department
        (id) ON
        DELETE CASCADE
);
        CREATE TABLE employee
        (
            id UNSIGNED
            INTEGER NOT NULL,
            firstName VARCHAR
            (30),
            LastName VARCHAR
            (30),
            role_id UNSIGNED INT NOT NULL,
            INDEX role_id
            (role_id),
            CONSTRAINT fk_role FOREIGN KEY
            (role_id) REFERENCES role
            (id) ON
            DELETE CASCADE,
            manager_id INT UNSIGNED,
            INDEX man_id
            (manager_id),
            CONSTRAINT fk_manager FOREIGN KEY
            (manager_id) REFERENCES employee
            (id) ON
            DELETE
            SET NULL
            );
           


               CREATE TABLE role
    (
        id INT
        UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR
        (30) NOT NULL,
        salary Decimal  NOT NULL,
        department_id INT NOT NULL,
        INDEX dep_id (department_id),
        CONSTRAINT fk_department FOREIGN KEY
        (department_id) REFERENCES department (id) ON DELETE CASCADE
);