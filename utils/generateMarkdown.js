// function to generate markdown for README
function licenseBadge(data) {
  //This function analyzes the license response from the prompt and retrieves that information 
  //from the link based on which option was picked.
  const licenseType = data.license[0];
  let licenseString = " "
    if (licenseType === "MIT") {
      licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (licenseType === "GNU General Public License 2.0") {
      licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (licenseType === "Apache License 2.0") {
      licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      };
    if (licenseType === "GNU General Public License 3.0") {
        licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      };
    return licenseString
  };
//This is the template for the Readme.md to be generated from.
//data is the parameter of the function which is the responses being passed from the inquirer module after completing the prompt.
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
  8. [E-mail](#e-mail)

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseBadge(data)}

## Questions
[github icon](./github-icon-small.png)
Github Profile: [${data.github}](https://github.com/${data.github})
Contact Email: [${data.email}](mailto:${data.email})
Directions for reaching out with further questions:
    ${data.reachOut}
`}
  module.exports = generateMarkdown;
  