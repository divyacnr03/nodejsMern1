const { readFile  }= require('../readFile');
const expect = require('chai').expect;
const fs = require('fs')

describe('mocking individual fs sync methods', () => {

  
    beforeEach(() => {
      sinon.stub(fs, 'existsSync').withArgs('samplefile.txt').returns(true)
      sinon
        .stub(fs, 'readFileSync')
        .withArgs('samplefile.txt', 'utf8')
        .returns('fake text')
    })
  
    afterEach(() => {
      // restore individual methods
      fs.existsSync.restore()
      fs.readFileSync.restore()
    })
  
    it('reads non-existent file', () => {
       expect(readFile('samplefile.txt')).to.equal("fake text")

    })
    // it('reads non-existent file', () => {
    //     expect(readFile('food.txt')).to.rejectedWith("Cannot find file food.txt")
 
    //  })
  })

