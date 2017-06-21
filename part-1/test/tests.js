const expect = require('chai').expect
const snippet = require('../functions.js').snippet
const numProps = require('../functions.js').numProps
const filterBetween = require('../functions.js').filterBetween
const weekday = require('../functions.js').weekday

describe("Phase 2 Challenge: Part 1", () => {

  describe("Show a weekday", () => {
    it("Shows correct day for first example in challenge question", () => {
      let date = new Date(2017, 5, 19)
      expect(weekday(date)).to.equal("Mon")
    })
    it("Shows correct day for second example in challenge question", () => {
      expect(weekday(new Date(2017, 5, 15))).to.equal("Thu")
    })
    it("Returns error when input is not a date", () => {
      expect(weekday(12)).to.equal("Input must be date")
    })
  })

  describe("Get a snippet from text", (done) => {
    it('Shortens string correctly', () => {
      expect(snippet("For the following exercises,", 10)).to.equal("For the fo...")
    })
    it("Displays whole string when shorter than maxLength", () =>{
      expect(snippet("Hello, world!", 20)).to.equal("Hello, world!")
    })
    it("Returns error when string input is not a string", () => {
      expect(snippet(5, 10)).to.equal("Inputs must be a string and a number!")
    })
    it("Returns error when maxLength is not a number", () => {
        expect(snippet("I'm a string", "I'm also a string")).to.equal("Inputs must be a string and a number!")
    })
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
    it("Returns error when input is not an object", () => {
      expect(numProps(5)).to.equal("Input must be an object!")
    })
  })
  describe("Filter between", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    it ("Filters array", () => {
      expect(filterBetween(arr, 3, 6)).to.eql([3, 4, 5, 6])
    })
    it ("Returns error when array input is not an array", () => {
      expect(filterBetween('string', 2, 3)).to.equal("Input must be an array then two numbers!")
    })
    it ("Returns error when min or max input is not a number", () => {
      expect(filterBetween([1, 2], 2, 'string')).to.equal("Input must be an array then two numbers!")
    })
  })
})
