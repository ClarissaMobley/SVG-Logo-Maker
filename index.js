// Create variable that include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "./examples/logo.svg";
const {Circle, Triangle, Square} = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo",
        name: "text",
        validate: (text) => text.length > 3 ? "Please enter up to 3 characters" : true,
    },
    {
        type: "input",
        message: "Please enter color keyword (OR a hexadecimal number) for your logo's text",
        name: "textColor",
        default: "white",
    },
    {
        type: "list",
        message: "Please select a shape for your logo",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
    },
    {
        type: "input",
        message: "Please enter a color (OR a hexadecimal number) for your logo's shape.",
        name: "shapeColor",
    },
];

// Create function to write logo.svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    );
}

// Create a function to intialize app
function init() {
    inquirer.prompt(questions).then(() => {
        writeToFile(fileName)
    });
}

// Function call to initialize app
init();