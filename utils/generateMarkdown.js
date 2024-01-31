function renderLicenseBadge(license) { // Render a license tag
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`; // Whatever the input is, put it in a blue license
  }
  return"";
}


function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n [license](#license)\n`
  }
  return "";
}


function renderLicenseSection(license) {
  if (license !== "none") {
    return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Creating a function that returns a license badge based on which license is passed in
function generateMarkdown(data) { // From the index.js fill the (data) holes
  return `# ${data.title} 
by ${data.name}
${renderLicenseBadge(data.licenses)}

## Description
${data.description}

## Deployed Application URL
${data.link}

## Screenshot
![alt-text](${data.screenshot})

## Table of Contents
[Features](#features),
[Langauges & Dependencies](#languagesanddependencies),
[How to Use This Application](#HowtoUseThisApplication),
[Contributors](#contributors),
[Testing](#testing),
[Questions](#questions),

## Features
${data.features}

## Languages & Dependencies
${data.require}

## How to Use This Application:
${data.usage}

## Contributors
${data.contributors}

## Testing
${data.test}

## Questions
Please send your questions ${data.email} or visit [${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown; // export the README.md
