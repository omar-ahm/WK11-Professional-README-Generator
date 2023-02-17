// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}

  #
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licence)
  - [Contribution guidelines](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  #
  ## Installation
  
  ${data.installation}

  #
  ## Usage
  
  ${data.usage}

  #
  ## License
  
  This project uses the ${data.license} license, please refer to the license section for more info.

  #
  ## Contributing
  
  This projects uses:  [${data.contributing}](https://github.com/github/docs/blob/main/CONTRIBUTING.md).

  #
  ## Tests
  
  ${data.tests}

  #
  ## Questions

  If you have any questions, please contact me at ${data.email}. You can also check out my 
  projects at [${data.github}](https://${data.github}).

`;
}

module.exports = generateMarkdown;
