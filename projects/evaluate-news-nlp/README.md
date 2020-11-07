# Architecture
These are the main files included (some, like the .babelrc file are excluded from this list since there isn't much project code there)
- __test___ folder: contains all jest tests
- src/client folder: contains all client code, including 2 js files to handle the form and validate the user input.
- src/server: contains the express server code in index.js
-package.json

# Validating the form
THe user must submit input that contains only alphanumeric characters found in the English language, or puncutation. Input with any other characters is rejected. 

# Testing
There are 3 test files in __test__, which is in the project directory root. One file tests that handleSubmit is defined, one validates that validation of user input is working, and the one verifies that the call to the API appropriately throws errors.

It was extremely difficult to test the server code is the standard export did not work once the express server started. However, using modules.export worked instead.  

