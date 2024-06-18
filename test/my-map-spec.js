const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;
const myMap = require('../problems/my-map');

chai.use(spies);

describe('myMap', () => {
    let arr;
    let callback;

    beforeEach(() => {
        arr = [1, 2, 3];
        callback = (el) => el * 2;
    });

    it ("should not mutate the passed-in array argument", () => {
        const originalArray = [...arr];
        myMap(arr, callback);
        expect(arr).to.deep.equal(originalArray);
    });

    it("should not call the built-in Array.map", () => {
        const arraySpy = chai.spy.on(Array.prototype, "map");
        myMap(arr, callback);
        expect(arraySpy).to.not.have.been.called();
    });

    it("should invoke the passed-in callback once for each element in the passed-in array argument", () => {
        const callbackSpy = chai.spy(callback);
        myMap(arr, callbackSpy);
        expect(callbackSpy).to.have.been.called.exactly(arr.length);
    });
})
