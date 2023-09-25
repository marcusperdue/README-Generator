// TODO: Include packages needed for this application
// npm install inquirer@8.2.4
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions and examples:',
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide information about contributing to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide information about running tests:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully created ${fileName}`);
        }
      });
    }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          const readmeContent = generateReadme(answers);
          writeToFile('README.md', readmeContent);
      })
      .catch((error) => {
          console.error(error);
      });
}

function generateReadme(data) {
  let readmeContent = `# ${data.title}\n\n`;

  // Description section
  readmeContent += `## Description\n\n${data.description}\n\n`;

  // Table of Contents section
  readmeContent += '## Table of Contents\n\n';
  readmeContent += '- [Description](#description)\n';
  readmeContent += '- [Installation](#installation)\n';
  readmeContent += '- [Usage](#usage)\n';
  readmeContent += '- [License](#license)\n';
  readmeContent += '- [Contributing](#contributing)\n';
  readmeContent += '- [Tests](#tests)\n';
  readmeContent += '- [Questions](#questions)\n\n';

  // Installation section
  readmeContent += `## Installation\n\n${data.installation}\n\n`;

  // Usage section
  readmeContent += `## Usage\n\n${data.usage}\n\n`;

  // License section with badge
  readmeContent += `## License\n\n${data.licenseBadge}\n\n`;

  // Contributing section
  readmeContent += `## Contributing\n\n${data.contributing}\n\n`;

  // Tests section
  readmeContent += `## Tests\n\n${data.tests}\n\n`;

  // Questions section with GitHub and email
  readmeContent += '## Questions\n\n';
  readmeContent += `- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})\n`;
  readmeContent += `- Email: ${data.email}\n\n`;

  // Return the generated README content as a string
  return readmeContent;
}
      
init();
