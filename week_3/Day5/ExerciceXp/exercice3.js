const p = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

p.then(value => console.log(value))
 .catch(error => console.error(error));

rejectedPromise.catch(error => console.error(error));
