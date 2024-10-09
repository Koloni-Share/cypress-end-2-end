# Koloni Cypress End-to-End Tests

End2End Cypress tests designed to verify the basic functionality and stability of the Koloni application.

## Table of Contents
- [Project Description](#project-description)
- [Scope](#scope)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Environment Configuration](#environment-configuration)
- [Libraries Used](#libraries-used)

---

## Project Description

This project contains Cypress End-to-End (E2E) tests designed to verify key functionalities of the Koloni application. The tests focus on ensuring that core features and user flows work as expected, including startup, authentication, navigation, and error handling.

## Scope

The tests in this repository cover the following key areas:

- **Application startup**: Verifies that the application starts successfully and loads correctly.
- **Login/authentication**: Checks that users can log in and authenticate successfully with valid credentials.
- **Navigation**: Ensures that users can navigate between different pages and sections of the application without issues.
- **Core functionality**: Tests essential features and workflows, such as creating, editing, and deleting data.
- **Error handling**: Validates that the application handles errors and exceptions gracefully.

## Setup

### Prerequisites

- Node.js and npm must be installed on your system.

To verify if you have Node.js and npm installed, run the following commands:
node -v
npm -v

If Node.js and npm are not installed, you can download them from Node.js official website.

### Installation

1- Clone the repository:
    git clone https://github.com/your-repo/koloni-cypress-tests.git

2- Navigate to the project directory:
    cd koloni-cypress-tests

3- Install dependencies:
    npm install

4- Install additional dependencies:
    Install Prettier:
        npm install prettier --save-dev

    Install AJV and AJV-Formats for schema validation:
        npm install ajv ajv-formats --save-dev

Running Tests
Open Cypress UI

To open Cypress in interactive mode, use the following command:

    npx cypress open

This will launch the Cypress test runner, where you can select and run tests interactively.

Run in Headless Mode

    To run all tests in headless mode (without the Cypress UI):

npx cypress run

This command will execute all the tests and output the results in the terminal.

## Project Structure

    cypress/fixtures: Contains test data used in the tests.
    cypress/integration: Contains the main test files.
    cypress/plugins: Contains Cypress plugins configuration.
    cypress/support: Contains custom commands and additional configurations.
        commands.js: Custom Cypress commands.
        index.js: Global configuration file for Cypress.
    cypress.config.js: Main configuration file for Cypress.
    package.json: npm configuration file, including scripts and dependencies.
    README.md: This file.

## Environment Configuration

    Libraries Used

    Cypress: The main framework for end-to-end testing.
    Prettier: A code formatter used for maintaining consistent code style.
    AJV: A JSON schema validator, used for validating API responses against predefined schemas.
    AJV-Formats: Adds support for additional formats like email, URI, etc., in AJV.