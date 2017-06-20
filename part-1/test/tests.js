const expect = require('chai').expect
const assert = require('chai').assert
const hello = require('../functions.js').hello
const snippet = require('../functions.js').snippet


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
