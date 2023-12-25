const error = new Error('error message');

// An error in JS has 3 properties as follows
console.log(error.message); // error message
console.log(error.name); // Error
console.log(error.stack); // the stack

// There are multiple error constructors:
new Error();
new SyntaxError();
new ReferenceError();
new RangeError();

// Instantiating the Error constructor does not crash the app. We have to `throw` the error

// Error handling in synchronous operations
try {
  throw new SyntaxError('Unexpected syntax error');
} catch (error) {
  console.log(error.message);
}
console.log('continue executing');

// Error handling in web API functions
setInterval(() => {
  try {
    throw new Error('Something wrong occurred');
  } catch (error) {
    console.log(error.message);
  }
}, 1000);

// Error handling in promises
Promise.resolve('creating a user in a database')
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((error) => console.log(error.message));

// Error handling in asyn/await syntax
async function asyncFunc() {
  try {
    await Promise.reject('Promise rejected');
  } catch (error) {
    console.log(error.message);
  }
}
asyncFunc();
console.log('continue executing');
