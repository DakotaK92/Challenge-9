const fs = require("fs"); // "File Structure" for node
const inquirer = require("inquirer"); // lauches the application "inquirer"
const generateMarkdown = require("./utils/generateMarkdown.js"); // pulls from the "generateMarkdown.js"
const  path = require("path"); // pushes the input from index into the "generateMarkdown.js"

const questions = [ // Launches questions for the user to input.
    {
        message: "What is your name?",
        name: "name",
        type: "input",
    },
    {
        message: "What is the name for your Project?",
        name: "title",
        type: "input",
    },
    {
        message: "Describe what the purpose of your project is.",
        name: "description",
        type: "input",
    },
    {
        message: "Where is your deployment?",
        name: "link",
        type: "input",
    }, 
    {
        message: "What licenses does your project have?",
        name: "licenses",
        type: "checkbox",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        message: "What are your dependencies?",
        name: "require",
        type: "input",
    },
    {
        message: "What are some cool features to your project?",
        name: "features",
        type: "input",
    },
    {
        message: "What langauges does your project have?",
        name: "usage",
        type: "input",
    },
    {
        message: "What is your Github?",
        name: "creator",
        type: "input",
    },
    {
        message: "What is your email?",
        name: "email",
        type: "input",
    },
    {
        message: "Who contributed to your project?",
        name: "contributors",
        type: "input",
        default:"",
    },
];

// Writing the README.md file
function writeToFile(fileName, data) { // write a new file
    return fs.writeFileSync(path.join(process.cwd(),fileName),data); // using the "FS" push
}


// initializing app
function init() {
    inquirer.prompt(questions).then((responses) => { // When answers are answered, then...
        console.log("Creating a Professional README.md File..."); // create a README.md file
        writeToFile("./dist/README.md", generateMarkdown({ ...responses })); // writes the README.md file
    });
}

// Function call to initialize app
init();
