var chai = require('chai');
var bufferEqual = require('buffer-equal');
var xor = require('../');

chai.should();

describe('Bitwise XOR', function () {
  it('should return the bitwise XOR of two Buffers', function (done) {
    bufferEqual(xor(Buffer.from('00ff', 'hex'), Buffer.from('3344', 'hex')), Buffer.from('33bb','hex')).should.be.true;
    done();
  });
  it('should return the bitwise XOR of two Strings', function (done) {
    bufferEqual(xor('toto', 'titi'), Buffer.from('00060006','hex')).should.be.true;
    done();
  });
});
