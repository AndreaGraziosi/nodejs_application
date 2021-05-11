const mocha = require("mocha")
const chai = require("chai")
const index = require("../app")
const expect = chai.expect
const chaiHttp = require('chai-http')
const server = require('app.js')

chai.use(chaiHttp)

describe('basic test routes', () => {
  it('returns a 200', (done) => {

  })
  it('returns a 200', (done) => {

  })
  it('returns a 200', (done) => {

  })
  it('returns a 200', (done) => {

  })
  it('returns a 200', (done) => {

  })


})







it("should say hello", function() {
    const hello = utils.sayHello()
    expect(hello).to.be.a("string")
    expect(hello).to.equal("Hello")
    expect(hello).with.lengthOf(5)
  })