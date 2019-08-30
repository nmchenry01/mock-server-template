# Mock-Server-Template

## Overview 

The idea behind this repository is to provide an example of how to create a quick and easy mock REST API using json-server, faker.js, and a simple script for the purposes of accelerating local front end development.

## Repository Structure

### Scripts

This directory contains a single script, `generateDb.js`. It's only purpose is to dynamically generate a JSON file that will be used as the database powering the mock API. 

### Routes

This directory contains a JSON file that includes a custom route configuration for json-server. If you need to add additional custom routes or prefixes, modify the `routes.json` file. 

### DB 

This directory contains a single JSON file, `db.json` which is where the above script will deposit the mock database. This is also the JSON file used by json-server. 

## Getting Started

These instructions detail the template dependencies, initial installation, and steps for running locally.

### Prerequisites

The dependencies for this template include Node (ideally using NVM).

#### Node

The service is implemented in Node, and the version defined in the .nvmrc is the latest version of LTS 10.x (Dubnium). The installer can be found here: https://nodejs.org/en/download/. It is also suggested that you install NVM, with instructions found in the github here: https://github.com/nvm-sh/nvm. NVM is used to manage the version of node currently running on your machine. Read the docs if you're unsure.

### Installing

Upon cloning the repository, the first step that needs to be taken (assuming you've got Node/NPM installed) is to run `npm install` in the root of the repository. This will install all of the production and development JavaScript dependencies.

### Running Locally

Once you've installed, you should be able to run the server locally on `localhost:3000`. A `package.json` script is provided for your convenience using nodemon. Run `npm start` to start the server running locally.

In order to provide data to your mock API, modify the `generateDb.js` file to produce the desired JSON output to match your API design. Then, run `node generateDb.js` in order to create the `db.json` file under /db. Once you've done this, you should be able to see your test data being deployed by your server.

The json-server library provides you with basic RESTful access to your data. See their README for detailed instructions. https://github.com/typicode/json-server#routes.