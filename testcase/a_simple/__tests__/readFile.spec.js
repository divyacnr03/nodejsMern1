const { readFile } = require('../readFile');
const expect = require('chai').expect
const sinon = require('sinon')
const fs = require('fs')

describe("GIVEN readfile function", () => {

    // before(() => {
    //     console.log("Inside Before")
    // })

    // after(() => {
    //     console.log("Inside After")
    // })

    beforeEach(() => {
        // what i want to stub is fs
       let stub = sinon.stub(fs, 'existsSync');

            stub.withArgs('/home/divya/workspace/stuff/nodejs/testcase/samplefile.txt')
            .returns(true)
            // stub.withArgs('/home/divya/workspace/stufdfsdf')
            // .returns(false)


        // sinon.stub(fs, 'existsSync')
        //     .withArgs('/home/divya/workspace/stufdfsdf')
        //     .returns(false)

        sinon.stub(fs, 'readFileSync')
            .returns('Helloworld')
    })

    afterEach(() => {
        // console.log("Inside AfterEach")
        fs.existsSync.restore();
        fs.readFileSync.restore();
    })

    it("WHEN invoke with valid filename then should return the content of the file", () =>{
        // setup
        let filename = '/home/divya/workspace/stuff/nodejs/testcase/samplefile.txt';
        let expectedResult = 'Helloworld';

        // perform action 
        let actualResult = readFile(filename);

        // Assertions
        expect(actualResult).to.equal(expectedResult)

    })

    xit("WHEN invoke with invalid filename then should return the error", () =>{
        // setup
        let filename = '/home/divya/workspace/stufdfsdf';
        let expectedError = 'Cannot find file /home/divya/workspace/stufdfsdf';

        // perform action 
        try{
            readFile(filename);
        } catch(err){
            // Assertions
            expect(err.message).to.equal(expectedError)
        }
    })
})