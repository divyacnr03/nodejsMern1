const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai')
const sinon = require('sinon')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { test1 , test2 }= require('../forSPies');


describe(" test1", () => {
    it("test1", () => {

        const callback = sinon.spy(test1);
        test1(10,20)
        // expect(test1(10, 20)).to.equal(30);
        expect( callback.called ).to.be.true();


    })
})


