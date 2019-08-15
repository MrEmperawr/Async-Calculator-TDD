function multiply(num1, num2, callback) {
    const product = Number.parseFloat(num1, 10) * Number.parseFloat(num2, 10);
    if (Number.isNaN(product)) {
        return callback(new Error('Inputs must be numbers'));
    }
    return callback(product);
}

module.exports.multiply = multiply;