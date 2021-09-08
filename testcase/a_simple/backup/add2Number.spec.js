const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { sum , convertToArray, getFoo, getFooThrowException}= require('../numberOperation');

describe("Add 2 numbers should be able to add 2 integers", () => {
    xit("Given 2 valid intergers, THEN add2Number should return the sum of those 2 numbers", () => {
        // Setup
        const expectedResult = 30;

        // Perform action
        const actualResult = add2Number(10,20);

        // Verify results
        expect(actualResult).to.equal(expectedResult); 

    })
})

describe("Add 2 numbers should be able to add 2 integers", () => {
    xit("Given 2 valid intergers, THEN add2Number should return the sum of those 2 numbers", () => {
        // Setup
        const expectedResult = [ 10, 20];

        // Perform action
        const actualResult = convertToArray(10,20);

        // Verify results
        assert.deepEqual(actualResult, expectedResult); 

    })
})

describe("Add 2 numbers should be able to add 2 integers", () => {
    xit("Given 2 valid intergers, THEN add2Number should return the sum of those 2 numbers", (done) => {
       getFoo().then(result => {
           assert.equal(result, 'foo1');
           done();
       })

    })
})

describe("Add 2 numbers should be able to add 2 integers", () => {
    it("Given 2 valid intergers, THEN add2Number should return the sum of those 2 numbers",   ( ) => {
        try {
            getFooThrowException()
        } catch(e) {
            expect(e.message).to.equal("There is a exception");
        }
        // assert.throws(getFooThrowException , Error, "There is a exception");
    })
})