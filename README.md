# Airalo API tests

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

For writing tests I used Postman desktop app. 
- The collection is run in the sequence
- In the first request I obtain the access_token and reuse in the next tests
- In the "Pre-request" to the `/v2/orders` endpoint I check if the token is exists
- After request I want to check that
    - the token is valid (response code is not 401)
    - response code is 200 (successful)
    - the order has correct package id
    - it contains 6 sims and they are unique
- In the response from `/v2/sims` I want to check that the esims from my order are present.
- In the end I unset the `sim_ids` (from the order request) and unset the tocken
- I didn't check in the second request if the token is present as the tests are run in a sequence but I'd do it if the tests were isolated


# Airalo UI Test

This project uses Cypress as UI automation tool.

## Prerequisites 
1. Make sure you have Node.js v18 or later installed
2. Run `npm install`

## To run tests in headless mode:
`npm run cypress-run` 

## To run tests in GUI:
`npm run cypress-open`

The test is written in the [homepage-spec.cy.js](https://github.com/olga-golentova/Airalo-coding-exercise/blob/main/UI%20tests/cypress/e2e/homepage-spec.cy.js) with the comments.
- I created a custom command to select elements by `data-testId`
- In the test I set the cookies to prevent redirect to localised page
  - in general, I'd use translation keys to assert text
- To wait for the page to load I am relying on the spinner elements, checking if they are not visible in differect parts of the test
before proceeding



