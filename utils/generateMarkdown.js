// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "* [License](#license)";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
   this project is licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## User Name:
  ${data.github}
  ## Title: 
  ${data.title}
  \n ${renderLicenseBadge(data.license)}
  ## Table of Contents: 
  * [Usage](#usage)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.install}
  ## Usage: 
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Credits: 
  ${data.contributing}
  ## Tests: 
  ${data.tests}
  ## Questions: 
  https://github.com/${data.github}/n
  ${data.email}
`;
}

module.exports = generateMarkdown;
