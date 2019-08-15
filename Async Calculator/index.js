const calculator = require('./src/calculator');

const addPromise = calculator.promisify(calculator.add);
const subtractPromise = calculator.promisify(calculator.subtract);
const dividePromise = calculator.promisify(calculator.divide);
const multiplyPromise = calculator.promisify(calculator.multiply);

addPromise('', 2)
    .then((data) => {
        console.log(data);
    })
    .catch(e => console.log(e));

subtractPromise(5, 2)
    .then((data) => {
        console.log(data);
    })
    .catch(e => console.log(e));

dividePromise(10, 2)
    .then((data) => {
        console.log(data);
    })
    .catch(e => console.log(e));

multiplyPromise(10, 2)
    .then((data) => {
        console.log(data);
    })
    .catch(e => console.log(e));
