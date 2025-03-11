# Overview
This project aims to be a full automation test suite for the Swag Labs solution. It uses [Cypress](https://www.cypress.io/) to interact with a web browser to test the system. It has the capability to generate reports using [mocha](https://mochajs.org/) and the tests are written as [cucumber](https://cucumber.io/docs/gherkin/reference/) feature files. All code files are written in [TypeScript](https://www.typescriptlang.org/).

# Setup Instructions

To setup the repo first install [node.js](https://nodejs.org/en/download/). Then open a terminal in the root of the project and restore the node packages using the node package manager using this command:

`npm install`

As a final step add any sensitive information that is required by the configuration files (such as user name and password) here:

`./cypress/fixtures/`

Also add the DB configuration for the DB you want to execute scripts on here:

`./cypress/fixtures/database-config.ts`


