const mocha = require("mocha")
const chai = require("chai")
const index = require("../app")
const expect = chai.expect

it("should say hello", function() {
    const hello = utils.sayHello()
    expect(hello).to.be.a("string")
    expect(hello).to.equal("Hello")
    expect(hello).with.lengthOf(5)
  })