
const connection = require("./ETConnection");//Create the variable for connection
class(DB){
    constructor(connection){
        this.connection = connection;
    }
    //query all the employees
    findAllEmployees(){ }
    //query all the PossibleManagers
    findAllPossibleManagers(){ }
    //query all the PossibleManagers
    findAllPossibleManagers(){ }
    //create a new employee
    createEmployee(employee){
        return this.connection.query("Insert INTO employee SET ?", employee);
    }
    //remove employee
    removeEmployee(employee){
        return this.connection.query("DELETE FROM employee WHERE id = ?", employeeId)
    }
    //update the employee's role
    updateEmployeeRole(employeeId){
        return this.connection.query("UPDATE employee SET role_id = WHERE id = ?", [roleId, employeeId]);
    }
    //update the manageer
    updateEmployeeManager(employeeId){
        return this.connection.query("UPDATE employee SET manager_id = WHERE id = ? ", [managerId, employeeId])
    }

}

