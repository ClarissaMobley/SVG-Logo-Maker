const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo",
        name: "text",
    },
    {
        type: "input",
        message: "Please enter color keyword (OR a hexadecimal number) for your logo's text",
        name: "textColor",
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