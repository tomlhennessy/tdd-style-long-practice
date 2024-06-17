const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', () => {
  it('should return the number 3', () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe('reciprocal', () => {
  context('valid arguments', () => {
    it('should return the reciprocal of the given number', () => {
      expect(reciprocal(2)).to.equal(0.5);
      expect(reciprocal(4)).to.equal(0.25);
      // expect(reciprocal(0.5)).to.equal(2);
    });
  });

  context('invalid arguments', () => {
    it('should throw a RangeError if the number is less than 1', () => {
      expect(() => reciprocal(0.5)).to.throw(RangeError, 'Input must be between 1 and 1000000');
    });

    it('should throw a RangeError if the number is greater than 1000000', () => {
      expect(() => reciprocal(1000001)).to.throw(RangeError, 'Input must be between 1 and 1000000');
    });
  });
});
