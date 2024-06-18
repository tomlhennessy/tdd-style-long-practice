const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
const myMap = require('../problems/my-map');

// use chai spies with chai
chai.use(spies);

describe('myMap', () => {
    let arr;
    let callback;

    // set up a fresh array and callback before each test
    beforeEach(() => {
        arr = [1, 2, 3];
        callback = (el) => el * 2;
    });

    // test that myMap does not mutate the original array
    it ("should not mutate the passed-in array argument", () => {
        const originalArray = [...arr];
        myMap(arr, callback);
        expect(arr).to.deep.equal(originalArray);
    });

    // test that myMap does not call the built-in Array.map method
    it("should not call the built-in Array.map", () => {
        const arraySpy = chai.spy.on(Array.prototype, "map");
        myMap(arr, callback);
        expect(arraySpy).to.not.have.been.called();
    });

    // test that the callback is called once for each array element
    it("should invoke the passed-in callback once for each element in the passed-in array argument", () => {
        const callbackSpy = chai.spy(callback);
        myMap(arr, callbackSpy);
        expect(callbackSpy).to.have.been.called.exactly(arr.length);
    });
})
