// Create variable that include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "./examples/logo.svg";
const { Circle, Triangle, Square } = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter up to 3 characters for your logo",
    name: "text",
    validate: (text) =>
      text.length > 3 ? "Please enter up to 3 characters" : true,
    filter: (text) => text.toUpperCase(),
  },
  {
    type: "input",
    message:
      "Please enter color keyword (OR a hexadecimal number) for your logo's text",
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
    message:
      "Please enter a color (OR a hexadecimal number) for your logo's shape.",
    name: "shapeColor",
    default: "hotpink",
  },
];

// Using ORM to correspond to the shape classes
const shapeClasses = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};

// Create function to generate SVG
function generateSVG(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const shapeClass = shapeClasses[shape];
  const shapeObj = new shapeClass();

  // Set the shape color
  shapeObj.setColor(shapeColor);

  // Return SVG string
  return `<svg width="300" height="200" viewbox= "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObj.render()}
        <text x="150" y="100" font-family="Arial" font-size="50" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
        </svg>`;
}

// Create function to write logo.svg file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// Create a function to intialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const svg = generateSVG(answers);
      writeToFile(fileName, svg);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

// Function call to initialize app
init();
