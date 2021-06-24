// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (data) =>
`# ${data.title}

${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please send them to ${data.email}

GitHub: [${data.github}](github.com/${data.github})
`;

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can this project be used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will you use for this project?',
            choices: ['MIT License', 'Apache License v2.0', 'GNU General Public License v3.0']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the rules for contributing to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What kinds of tests are to be used?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address to recieve questions:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },

    ])
    .then((data)=> {
        const readmeContent = generateREADME(data)

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        )
    }
    );

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
