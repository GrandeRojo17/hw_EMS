//using async await, don't forget the 'async before each function
//start off with the imports/'requires'
const db = ("./db");
//breakd down prompt out of inquirer so I won't have to type as much.
const { prompt } = require("inquirer");
const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const consoleTable = require("console.table");
function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
};
//runApp();
//
//function runApp() {
//    const logoText = logo({ name: "Parks and Rec" }).render();
//    console.log(logoText);
//    searchDB();
//}
startDB();

function startDB() {
    inquirer
        .prompt({
            type: "list",
            name: "choice",
            message: "Choose your action",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Exit"
            ]

        }).then((response) => {
            switch (response.action) {
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                default:
                    exitApp();
                    break;
            }
        })
}
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        searchDB();
    });
}

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        searchDB(); ``
    })

}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        searchDB();
    })

}
const function removeEmployee(){
    const employees = await db.findAllEmployees();
    const employeeChoices = employees.map(({id,firstName,LastName}) => ({name: `${firstName}${lastName}`,value:id}));

    const {employeeId} = await prompt([{type:"list"
,name:"employeeId",message: "Which emplooee whould you like to fire?",choices:employeeChoices


}]);

await db.removeEmployee(employeeId);






}

function exitApp() {
    console.log("Ending Program!");
    process.exit();
}
