"use strict";

var mocha = require("mocha"),
    chai = require("chai"),
    expect = chai.expect;

chai.should();

describe("Dummy Spec", () => {

    describe("should work with ES6 + 7 features.", () => {

        it("true should === true", () => { expect(true).to.be.true; });

        it("false should === false", () => { expect(false).to.be.false; });
    });
});
