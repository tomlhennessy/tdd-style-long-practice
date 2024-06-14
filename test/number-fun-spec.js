const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', () => {
    it('should return the number 3', () => {
        expect(returnsThree()).to.equal(3);
    })
})
