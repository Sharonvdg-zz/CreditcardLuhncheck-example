# Validation Example Creditcard

## For Bootstrap Validator
Find this repo at https://github.com/1000hz/validator-remote-example. 
Documentation: http://1000hz.github.io/bootstrap-validator/

Comments from author 1000hz:  
See http://github.com/1000hz/bootstrap-validator for the library to which this example refers.
Here's a simple little express server that implements a server-side validation endpoint for the remote validator to use.
The validator expects a `200 OK` response to mean the input is valid. Anything else is considered to be invalid, and the *status text* is used as the error message shown to the user.  


## Validating creditcard number

To validate if the creditcard number is real, visit this library: https://gist.github.com/DiegoSalazar/4075533 (Diego Salazar).
Copy paste this into your index.js and use it in your check. 


### Running the example
Assuming you have node installed,
```
npm install
npm start
```