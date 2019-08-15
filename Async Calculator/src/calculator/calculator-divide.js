function divide(num1, num2, callback) {
    if (num2 === 0) {
        return callback(new Error('Cannot divide by zero.'));
    }
    const quotient = Number.parseFloat(num1, 10) / Number.parseFloat(num2, 10);
    if (Number.isNaN(quotient)) {
        return callback(new Error('Inputs must be numbers'));
    }
    return callback(quotient);
}

module.exports.divide = divide;