# Pet Store UI automation with codeceptjs, puppeteer and mocha

## Environment Setup

# Install the following 

1. npm
2. vscode
3. mocha
4. codeceptjs
5. eslint
6. faker
7. mocha-junit-reporter
8. mochawesome
9. prettier
10. puppeteer


## Instruction to Run the web ui tests

1. Clone the repository https://github.com/daahlia/pet-store-web-ui-automation.git
2. Open the Project in Visual Studio Code
3. To run the tests use the following command and this should run all the tests under test folder
- npx codeceptjs run --reporter mochawesome
4. The action taken at step 3, will generate a mochawesome report and save it under output folder 

## Issues

## Observed the following issues, while performing testing

Issue 1 - User registration fails and system generates 500 - Internal server error, when any of the available field values are not entered.

- Steps to reproduce are as below
1. Navigate to the user registration page
2. Enter input value in User ID, Password fields.
3. Make sure any (OR all) of the following field values are blank
   - Repeat Password
   - id
   - username
   - firstName
   - lastName
   - email
   - password
   - phone
   - address
   - city
   - state
   - zip
   - country
4. Hit the 'Save Account Information' button.
5. The action taken at step - 4 generates 500 - internal server error.
If all the fields are required to register a new user, system should genreate relevant validation error when any of the field values are missing.


Issue 2 - System unexpectedly allows to add/update products to the cart for users, who are not registered or logged in.

- Steps to reproduce are as below
1. Hit the url - https://petstore.octoperf.com/actions/Catalog.action
2. Add/remvoe items to the cart
3. Update the cart
4. The actions taken at step-3 and 4 should not be available to a user, who is not registered or logged in.
5. System should redirect the user to the login page.
