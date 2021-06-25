// console.log('Hello World!');
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (data) =>
`
# ${data.title}

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

GitHub: [${data.github}](http:/github.com/${data.github})
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
        if (data.license === 'MIT License') {
            fs.writeFile('README.md', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', (err) =>
            err ? console.log(err) : console.log('added license')
            )
        } else if (data.license === 'Apache License v2.0') {
            fs.writeFile('README.md', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', (err) =>
            err ? console.log(err) : console.log('added license')
            )
        }else {
            fs.writeFile('README.md', '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)', (err) =>
            err ? console.log(err) : console.log('added license')
            )
        }

        fs.appendFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        )
    }
    );
