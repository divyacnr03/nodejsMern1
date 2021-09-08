const { sum, convertToArray, getFoo, getFooThrowException } = require("../numberOperation")
const expect = require("chai").expect;
const assert = require("chai").assert;

describe("GIVEN sum is a function,", () =>{
    xit(" WHEN Invoked with 2 interger THEN sum of 2 integers are returned", () =>{
        // Setup
        let a = 10;
        let b = 20;
        let expectedResult = 30;


        // Perform action
        let ActualResult = sum(a,b);

        // Assertions
        expect(ActualResult).to.equal(expectedResult);


    })

    xit(" WHEN Invoked with null values THEN return null", () =>{
        // setup
        let a = null;
        let b = 10;
        let expectedResult = null;

        // perform action
        let ActualResult = sum(a, b);

        //assertion
        expect(ActualResult).to.equal(expectedResult);


    })
})

describe("GIVEN convertToArray,", () =>{
    xit(" WHEN Invoked with 1 or more prameters THEN incremented values of the pramater are returned as array", () =>{
        // Setup
        let a = 10;
        let b = 20;
        let expectedResult = [11, 21];


        // Perform action
        let ActualResult = convertToArray(a,b);

        // Assertions
        assert.deepEqual(ActualResult, expectedResult);




    })

    xit(" WHEN Invoked with null values THEN return null",  (done) =>{
        // setup

        let expectedResult = "foo";

        // perform action
        getFoo().then(result =>  {
                expect(result).to.equal(expectedResult);
                done();

            })

        //assertion


    })

    it(" WHEN getFooThrowException ",   () =>{
        // setup
        let res = {
            err : "SomeError"
        }
        let expectedResult = "foo";

        // perform action
         expect(getFooThrowException(res)).to.be.rejectedWith('There is a exception')

         await expect(getFooThrowException({err : "error occured"})).to.be.rejectedWith("There is a exception")


        //assertion


    })
})