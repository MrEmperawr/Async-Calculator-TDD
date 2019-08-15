module.exports = function promisify(fn) {
    return function () {
        return new Promise((resolve, reject) => {
            fn(...arguments, function (data) {
                if (data instanceof Error) {
                    return reject(data);
                }
                return resolve(data);
            })
        })
    };
}