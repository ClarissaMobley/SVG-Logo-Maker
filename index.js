// Create variable that include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "./examples/circle.svg";
const { Circle, Triangle, Square } = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter up to 3 characters for your logo",
    name: "text",
    validate: (text) =>
      text.length > 3 ? "Please enter up to 3 characters" : true,
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
  },
];

// // Create function to generate SVG
// function generateSVG(data) {
//   const { text, textColor, shape, shapeColor } = data;
//   let shapeObj;
//   switch (shape) {
//     case "Circle":
//       shapeObj = new Circle();
//       break;
//     case "Triangle":
//       shapeObj = new Triangle();
//       break;
//     case "Square":
//       shapeObj = new Square();
//       break;
//   }
//     shapeObj.setColor(shapeColor);

// Using ORM to correspond to the shape classes
const shapeClasses = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};

function generateSVG(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const ShapeClass = shapeClasses[shape];
  const shapeObj = new ShapeClass(shapeColor);

  // Return SVG string
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.render()}
    <text x="150" y="100" font-family="Arial" font-size="20" fill="${textColor}" text-anchor="middle">${text}</text>
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
