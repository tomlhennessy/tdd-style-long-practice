const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe ('reverseString', () => {
    it('should reverse the string "fun" to "nuf"', () => {
        const input = 'fun';
        const expectedOutput = 'nuf';
        expect(reverseString(input)).to.equal(expectedOutput);
    })

    it('should return an empty string if input is an empty string', () => {
        const input = '';
        const expectedOutput = '';
        expect(reverseString(input)).to.equal(expectedOutput);
    })

    it('should handle a string with one character', () => {
        const input = 'a';
        const expectedOutput = 'a';
        expect(reverseString(input)).to.equal(expectedOutput);
    })

    it('should handle a string with spaces', () => {
        const input = 'hello world';
        const expectedOutput = 'dlrow olleh';
        expect(reverseString(input)).to.equal(expectedOutput);
    })

    it('should throw an error if input is not a string', () => {
        const input = 123;
        expect(() => reverseString(input)).to.throw(TypeError, 'Input must be a string');
    })
})
