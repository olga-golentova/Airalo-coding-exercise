# 1. Airalo API tests

## Prerequisites 
1. Make sure you have Node.js v16 or later installed
2. Install 'newman' :
`npm install -g newman`

## Environment Setup
This project uses Postman environment variables.

1. Create local-dev.postman_environment.json and copy the sample file:
`mv local-dev.postman_environment.sample.json local-dev.postman_environment.json`
2. Fill in:
- `client_id`
- `client_secret`

## Running locally with Newman:
Use this command:
`newman run airalo_tests.postman_collection.json -e local-dev.postman_environment.json`


# Airalo UI Test

This project uses Cypress as UI automation tool.

## Prerequisites 
1. Make sure you have Node.js v18 or later installed
2. Run `npm install`

## To run tests in headless mode:
`npm run cypress-run` 

## To run tests in GUI:
`npm run cypress-open`

