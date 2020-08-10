//using async await, don't forget the 'async before each function
//start off with the imports/'requires'
//breakd down prompt out of inquirer so I won't have to type as much.
const { prompt } = require("inquirer");
const db = require("./db/dbConnection");
const inquirer = require("inquirer");
require("console.table");
const logo = require("asciiart-logo");
// const consoleTable = require("console.table");

init();

//init was made afterwards but first console.logs the "logoText"

function init() {
    const logoText = logo({ name: "Employee Manager!", font: 'NancyJ-Improved', padding: 2, logoColor: "bold-magenta", version: 1.56, description: "Quickly manage your ever evolving employee roster.😎 " }).render();
    console.log(logoText);
    startDB();
};



async function startDB() {
    //startDB will start up the db and inquirer and ask you questions.
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "View, Add ,Remove or Update.",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]

        }]);
    //run through my options and if none then default "quit"
    switch (choice) {
        case "ADD_ROLE":
            return addRole();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "ADD_DEPARTMENT":
            return addDepartment();
        case "VIEW_EMPLOYEES":
            return viewEmployees();
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDepartment();
        case "VIEW_DEPARTMENTS":
            return viewDepartments();
        case "VIEW_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();
        case "VIEW_ROLES":
            return viewRoles();
        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeRole();
        case "UPDATE_EMPLOYEE_MANAGER":
            return updateEmployeeManager();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        case "REMOVE_DEPARTMENT":
            return removeDepartment();
        case "REMOVE_ROLE":
            return removeRole();
        default:
            return exitApp();
    }
}

//view Employees
async function viewEmployees() {
    //Query all of the employees into a 'employee' variable.
    const employees = db.findAllEmployees();
    // console.log("\n"); console.table(employees);
    console.log("View Employees list... okay")
    startDB();
}
async function viewRoles() {
    const roles = await db.findAllRoles();

    console.log("\n");
    console.table(roles);

    async function viewRoles() {
        const roles = await db.findAllRoles();

        console.log("\n");
        console.table(roles);

        startDB();
    }

}


async function viewAllRoles() {
    const allRoles = await db.findAllRoles();
    console.log("\n");
    console.table(allRoles);
    searchDB();
}
async function addRole() {
    const departments = await db.findAllDepartments();

    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const role = await prompt([
        {
            name: "title",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: departmentChoices
        }
    ]);

    await db.createRole(role);

    console.log(`Added ${role.title} to the database`);

    searchDB();
}
async function addDepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]);

    await db.createDepartment(department);

    console.log(`Added ${department.name} to the database`);

    startDB();
}
async function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        startDB();
    })

}
async function removeEmployee() {
    const employees = await db.findAllEmployees();
    const employeeChoices = employees.map(({ id, firstName, LastName }) => ({ name: `${firstName}${lastName}`, value: id }));

    const { employeeId } = await prompt([{
        type: "list"
        , name: "employeeId", message: "Which emplooee whould you like to fire?", choices: employeeChoices


    }]);

    await db.removeEmployee(employeeId);






}
async function viewDepartments() {
    const departments = await db.findAllDepartments();

    console.log("\n");
    console.table(departments);

    startDB();
}

async function viewEmployeesByManager() {
    const managers = await db.findAllEmployees();

    const managerChoices = managers.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));

    const { managerId } = await prompt([
        {
            type: "list",
            name: "managerId",
            message: "Which employee do you want to see direct reports for?",
            choices: managerChoices
        }
    ]);

    const employees = await db.findAllEmployeesByManager(managerId);

    console.log("\n");

    if (employees.length === 0) {
        console.log("The selected employee has no direct reports");
    } else {
        console.table(employees);
    }

    startDB();
}
async function viewEmployeesByDepartment() {
    d
    const departments = await db.findAllDepartments();

    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
    }));

    const { departmentId } = await prompt([
        {
            type: "list",
            name: "departmentId",
            message: "Which department would you like to see employees for?",
            choices: departmentChoices
        }
    ]);

    const employees = await db.findAllEmployeesByDepartment(departmentId);

    console.log("\n");
    console.table(employees);

    startDB();
}

async function viewEmployeesByManager() {
    const managers = await db.findAllEmployees();

    const managerChoices = managers.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));

    const { managerId } = await prompt([
        {
            type: "list",
            name: "managerId",
            message: "Which employee do you want to see direct reports for?",
            choices: managerChoices
        }
    ]);

    const employees = await db.findAllEmployeesByManager(managerId);

    console.log("\n");

    if (employees.length === 0) {
        console.log("The selected employee has no direct reports");
    } else {
        console.table(employees);
    }

    startDB();
}
// remove Employee
async function removeEmployee() {
    const employees = await db.findAllEmployees();

    const employeeChoices = employees.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));

    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee do you want to remove?",
            choices: employeeChoices
        }
    ]);

    await db.removeEmployee(employeeId);

    console.log("Removed employee from the database");

    startDB();
}

//add Employee
async function addEmployee() {
    const roles = await db.findAllRoles();
    const employees = await db.findAllEmployees();

    const employee = await prompt([
        {
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            name: "lastName",
            message: "What is the employee's last name?"
        }
    ]);

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt({
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
    });

    employee.role_id = roleId;

    const managerChoices = employees.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));
    managerChoices.unshift({ name: "None", value: null });

    const { managerId } = await prompt({
        type: "list",
        name: "managerId",
        message: "Who is the employee's manager?",
        choices: managerChoices
    });

    employee.manager_id = managerId;

    await db.createEmployee(employee);

    console.log(
        `Added ${employee.firstName} ${employee.lastName} to the database`
    );
    //then return back to the main screen.
    startDB();
}

//removing a role in the company no longer needed
async function removeRole() {
    const roles = await db.findAllRoles();

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message:
                "Which role do you want to remove? (Warning: This will also remove employees)",
            choices: roleChoices
        }
    ]);

    await db.removeRole(roleId);

    console.log("Removed role from the database");

    startDB();
}
async function updateEmployeeRole() {
    const employees = await db.findAllEmployees();

    const employeeChoices = employees.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));

    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role do you want to update?",
            choices: employeeChoices
        }
    ]);

    const roles = await db.findAllRoles();

    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    const { roleId } = await prompt([
        {
            type: "list",
            name: "roleId",
            message: "Which role do you want to assign the selected employee?",
            choices: roleChoices
        }
    ]);

    await db.updateEmployeeRole(employeeId, roleId);

    console.log("Updated employee's role");

    startDB();
}
//Update the managers employee list
async function updateEmployeeManager() {
    const employees = await db.findAllEmployees();

    const employeeChoices = employees.map(({ id, firstName, lastName }) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));

    const { employeeId } = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's manager do you want to update?",
            choices: employeeChoices
        }
    ]);
}
//function to end the app
function exitApp() {
    console.log("Have a great day, See you later !");
    process.exit();
}
