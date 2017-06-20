const expect = require('chai').expect
const assert = require('chai').assert
const snippet = require('../functions.js').snippet
const numProps = require('../functions.js').numProps
const filterBetween = require('../functions.js').filterBetween


describe("Get a snippet from text", (done) => {
  it('Shortens string correctly', () => {
    let result = snippet("For the following exercises,", 10)
    assert.equal(result, "For the fo...")
  })
})

// describe('Get a snippet from text', (done) => {
//   it("Shortens string correctly", () => {
//     expect(snippet("For the following exercises,", 10)).to.equal("For the fo…")
//   })
//   it("Displays whole string when appropriate", () => {
//     expect(snippet("Hello, world!", 20)).to.equal("Hello, world!")
//   })
// })

// ("For the following exercises,", 10) // => "For the fo…"
// })
