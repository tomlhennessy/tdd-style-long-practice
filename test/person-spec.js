const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person", () => {
    let person1, person2;

    beforeEach(() => {
        person1 = new Person("Mai", 32);
        person2 = new Person("Erin", 25);
    });

    it("should set name and age properties in constructor", () => {
        expect(person1).to.have.property("name", "Mai");
        expect(person1).to.have.property("age", 32);
    })

    it("should return greeting message with sayHello()", () => {
        expect(person1.sayHello()).to.equal("Mai says hello!");
    })

    it("should return visit message with visit()", () => {
        expect(person1.visit(person2)).to.equal("Mai visited Erin");
    })

    it("should switch visit with switchVisit()", () => {
        expect(person1.switchVisit(person2)).to.equal("Erin visited Mai");
    })

    it("should update properties with valid object in update()", () => {
        person1.update({ name: "Lulu", age: 57});
        expect(person1).to.have.property("name", "Lulu");
        expect(person1).to.have.property("age", 57);
    })

    it("should throw TypeError if update() argument is not an object", () => {
        expect(() => person1.update("not and object")).to.throw(TypeError, 'Argument must be an object');
    })

    it("should throw TypeError if update() object does not have name and age", () => {
        expect(() => person1.update({ name: "Lulu" })).to.throw(TypeError, 'Object must have name and age properties');
    });

    it("should return true if tryUpdate() successfully updates", () => {
        expect(person1.tryUpdate({ name: "Lulu", age: 57})).to.be.true;
        expect(person1).to.have.property("name", "Lulu");
        expect(person1).to.have.property("age", 57);
    })

    it("should return false if tryUpdate() fails to update", () => {
        expect(person1.tryUpdate("not an object")).to.be.false;
        expect(person1).to.have.property("name", "Mai");
        expect(person1).to.have.property("age", 32);
    })

    it("should greet all with greetAll() static method", () => {
        const people = [person1, person2];
        const greetings = Person.greetAll(people);
        expect(greetings).to.deep.equal(["Mai says hello!", "Erin says hello!"]);
    })
})
