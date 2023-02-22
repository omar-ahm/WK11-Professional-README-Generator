// function to generate markdown for README
function generateMarkdown(data) {
// Markdown for generating the relevant license badge to display and link to the license information page
  const licenseBadge = 
  data.license === 'MIT' ? '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)' :
  data.license === 'Apache 2.0' ? '![Apache 2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)' :
  data.license === 'ISC' ? '![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)' :
  data.license === 'GPL' ? '![GPL License](https://img.shields.io/badge/license-GPL-blue.svg)' :
  data.license === 'CC BY 4.0' ? '![CC BY 4.0 License](https://img.shields.io/badge/license-CC%20BY%204.0-blue.svg)' :
  '';


// README markdown structure 
  return `
 
  ${licenseBadge} 

  # ${data.title}

  ## Description
  
  ${data.description}

  <br/>
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licence)
  - [Contribution guidelines](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  <br/>

  ## Installation
  
  ${data.installation}

  <br/>

  ## Usage
  
  ${data.usage}

  <br/>

  ## Credits

  ${data.credits}

  <br/>

  ## License
  
  This project uses the ${data.license} license, please refer to the license section for more info.

  <br/>

  ## Contributing
  
  This projects uses:  [${data.contributing}](https://github.com/github/docs/blob/main/CONTRIBUTING.md)

  <br/>

  ## Tests
  
  ${data.tests}

  <br/>

  ## Questions

  If you have any questions, please contact me at ${data.email}. You can also check out my other
  projects at [https://${data.github}](https://${data.github}).

`;
}

module.exports = generateMarkdown;
