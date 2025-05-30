# Airalo API tests

## Prerequisites 
1. Make sure you have Node.js v16 or later installed
2. Install 'newman' :
`npm install -g newman`


## Environment Setup

This project uses Postman environment variables.

1. Create local-dev.postman_environment.json
2. Copy the sample file:
local-dev.postman_environment.sample.json
3. Fill in:
- `client_id`
- `client_secret`

## Running locally with Newman:
Use this command:
`newman run airalo_tests.postman_collection.json -e local-dev.postman_environment.json`
