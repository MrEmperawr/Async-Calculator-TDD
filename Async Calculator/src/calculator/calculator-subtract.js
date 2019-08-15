function subtract (num1, num2, callback) {
    const sum = Number.parseFloat(num1, 10) - Number.parseFloat(num2, 10);
    if (Number.isNaN(sum)) {
        return callback(new Error('Inputs must be numbers'))
    }
    return callback(sum);
}

module.exports.subtract = subtract;