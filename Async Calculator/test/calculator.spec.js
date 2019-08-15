const assert = require('assert');
const calculator = require('../src/calculator');
const addPromise = calculator.promisify(calculator.add);
const subtractPromise = calculator.promisify(calculator.subtract);
const dividePromise = calculator.promisify(calculator.divide);
const multiplyPromise = calculator.promisify(calculator.multiply);

describe('The callback calculator.add', () => {
    it('1 + 2 should be 3', (done) => {
        calculator.add(1, 2, (result) => {
            assert.equal(result, 3);
            done();
        });
    });

    it('should add floats correctly', (done) => {
        calculator.add(1.54, 2.56, (result) => {
            assert.equal(result, 4.1);
            done();
        });
    });

    it('non-numeral input should cause an Error', (done) => {
        calculator.add('gris', 'hej', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });

    it('should reject edge case with empty strings', (done) => {
        calculator.add('', '', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });
});

describe('The callback calculator.subtract', () => {

    it('3 - 2 should be 1', (done) => {
        calculator.subtract(3, 2, (result) => {
            assert.equal(result, 1);
            done();
        });
    });

    it('should subtract floats correctly', (done) => {
        calculator.subtract(3.5, 2.5, (result) => {
            assert.equal(result, 1);
            done();
        });
    });

    it('non-numeral input should cause an Error', (done) => {
        calculator.subtract('Meh', 'Malanore', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });

    it('should reject edge case with empty strings', (done) => {
        calculator.add('', '', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });
});

describe('The callback calculator.divide', () => {

    it('77 / 7 should be 11', (done) => {
        calculator.divide(77, 7, (result) => {
            assert.equal(result, 11);
            done();
        });
    });

    it('should divide floats correctly', (done) => {
        calculator.divide(8.4, 2, (result) => {
            assert.equal(result, 4.2);
            done();
        });
    });

    it('non-numeral input should cause an Error', (done) => {
        calculator.divide('win', 'noez', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });

    it('dividing by zero causes an error', (done) => {
        calculator.divide(3, 0, (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });

    it('should reject edge case with empty strings', (done) => {
        calculator.add('', '', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });
});

describe('The callback calculator.multiply', () => {

    it('11 * 7 should be 77', (done) => {
        calculator.multiply(11, 7, (result) => {
            assert.strictEqual(result, 77);
            done();
        });
    });

    it('should multiply floats correctly', (done) => {
        calculator.multiply(3.4, 3, (result) => {
            assert.strictEqual(result, 10.2);
            done();
        });
    });

    it('non-numeral input should cause an Error', (done) => {
        calculator.multiply(11, 'noez', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });

    it('should handle edge case with empty strings', (done) => {
        calculator.add('', '', (result) => {
            assert.ok(result instanceof Error);
            done();
        });
    });
});



describe('addPromise', () => {

    it('adds with promise', async () => {
        const result = await addPromise(5, 5);
        assert.equal(result, 10);
    });

    it('adds floats correctly', async () => {
        const result = await addPromise(3.5, 5.5);
        assert.equal(result, 9);
    });

    it("non-numeral input should cause an Error", async () => {
        await assert.rejects(addPromise('Sin', 'Dorei'));
    });
    
    it("should handle edge case with empty strings", async () => {
		await assert.rejects(addPromise('', 5));
	});

});

describe('multiplyPromise', () => {

    it('multiplies with promise', async () => {
        const result = await multiplyPromise(49, 7);
        assert.equal(result, 343);
    });

    it('multiplies floats correctly', async () => {
        const result = await multiplyPromise(3.5, 3.5);
        assert.equal(result, 12.25);
    });

    it("non-numeral input should cause an Error", async () => {
        await assert.rejects(multiplyPromise('Sin', 'Dorei'));
    });
    
    it("should handle edge case with empty strings", async () => {
		await assert.rejects(multiplyPromise('', 5));
    });
    
    it("should handle edge case with two empty strings", async () => {
		await assert.rejects(multiplyPromise('', ''));
	});
});

describe('subtractPromise', () => {

    it('subtracts with promise', async () => {
        const result = await subtractPromise(300, 3);
        assert.equal(result, 297);
    });

    it('subtracts floats correctly', async () => {
        const result = await subtractPromise(3.5, 1.5);
        assert.equal(result, 2);
    });

    it("non-numeral input should cause an Error", async () => {
       await assert.rejects(subtractPromise('Sin', 'Dorei'));
    });
    
    it("should handle edge case with empty strings", async () => {
		await assert.rejects(subtractPromise('', 5));
    });
    
    it("should handle edge case with two empty strings", async () => {
		await assert.rejects(subtractPromise('', ''));
	});
});

describe('dividePromise', () => {

    it('divides with promise', async () => {
        const result = await dividePromise(32, 16);
        assert.equal(result, 2);
    });

    it('divides floats correctly', async () => {
        const result = await dividePromise(6.8, 2);
        assert.equal(result, 3.4);
    });

    it("non-numeral input should cause an Error", async () => {
        await assert.rejects(dividePromise('Sin', 'Dorei'));
    });
    
    it("should handle edge case with empty strings", async () => {
		await assert.rejects(dividePromise('', 5));
    });
    
    it("should handle edge case with two empty strings", async () => {
		await assert.rejects(dividePromise('', ''));
	});
});