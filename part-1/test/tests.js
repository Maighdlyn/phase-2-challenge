const expect = require('chai').expect
const snippet = require('../functions.js').snippet
const numProps = require('../functions.js').numProps
const filterBetween = require('../functions.js').filterBetween
const weekday = require('../functions.js').weekday

describe("Phase 2 Challenge: Part 1", () => {
  describe("Show a weekday", () => {
    it("Shows correct day for first example in challenge", () => {
      let date = new Date(2017, 5, 19)
      expect(weekday(date)).to.equal("Mon")
    })
    it("Shows correct day for second example in challenge", () => {
      expect(weekday(new Date(2017, 5, 15))).to.equal("Thu")
    })
  })
  describe("Get a snippet from text", (done) => {
    it('Shortens string correctly', () => {
      expect(snippet("For the following exercises,", 10)).to.equal("For the fo...")
    })
    it("Displays whole string when shorter than maxLength", () =>{
      expect(snippet("Hello, world!", 20)).to.equal("Hello, world!")
    })
    // it("Throws error when string input is not a string", () => {
    //   expect(snippet(5, 10)).to.throw()
    // })
    // it("Throws error when maxLength is not a number", () => {
    //     expect(snippet("I'm a string", "I'm also a string")).to.throw()
    // })
  })
  describe("Number of properties", () => {
    it("Returns number of properties for provided 'friends' example", () => {
      let friend = {
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      }
      expect(numProps(friend)).to.equal(3)
    })
    it("Returns 0 properties for an empty object", () => {
      expect(numProps({})).to.equal(0)
    })
    //  A test using unexpected/invalid inputs for the numProps() function is written in tests.js.
  })
  describe("Filter between", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    it ("filters array", () => {
      expect(filterBetween(arr, 3, 6)).to.eql([3, 4, 5, 6])
    })
  })
})
