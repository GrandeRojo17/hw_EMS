//Main db query parameters that is used define how the connection will "connect".
const connection = require("./connection");//Create the variable for connection
//create a DB class
//this will host the query commands and access them when needed.
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    //query all the employees
    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, ' ', manager.lastName) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    //query all the PossibleManagers
    findAllPossibleManagers(employeeId) {
        return this.connection.query("SELECT id,firstName,lastName FROM employee WHERE id != ?", employeeId);
    }
    //query all the PossibleManagers
    findAllPossibleManagers(employeeId) {
        return this.connection.query("SELECT id, firstName,lastName FROM employee WHERE id !=?", employeeId);
    }
    //create a new employee
    createEmployee(employee) {
        return this.connection.query("Insert INTO employee SET ?", employee);
    }
    //remove employee
    removeEmployee(employee) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", employeeId);
    }
    //update the employee's role
    updateEmployeeRole(employeeId) {
        return this.connection.query("UPDATE employee SET role_id = WHERE id = ?", [roleId, employeeId]);
    }
    //update the manageer
    updateEmployeeManager(employeeId) {
        return this.connection.query("UPDATE employee SET manager_id = WHERE id = ? ", [managerId, employeeId]);
    }

    findAllRoles() {
        return this.connection.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
    }

    //create a new role
    createNewRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }
    //remove a role from the db
    removeRole(roleId) {
        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    }
    //find all departments, join with employeees and roled and sum up utilized department budget
    findAllDepartments() {
        return this.connection.query("SELECT department.id,department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;");
    }
    //create new department
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }
    //Remove a department
    removeDepartment(departmentId) {
        return this.connection.query("DELETE FROM department WHERE id = ?", departmentId);
    }
    //Find all employees in a given department, join with roles to desplay role titles.
    findAllEmployeesByDepartment(departmentId) {
        return this.connection.query("SELECT employee.id,employee.firstName,employee.lastName,role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?; ", departmentId);
    }
    //find all employees by manager, join with departments and roles to display
    findAllEmployeesByManager(managerId) {
        return this.connection.query(
            "SELECT employee.id, employee.firstName, employee.lastName, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
            managerId
        );
    }


}
module.exports = new DB(connection);
