const expect = require('chai').expect
const functions = require('./functions.js')

describe('Get a snippet from text', (done) => {
  it("Shortens string correctly", () => {
    expect(snippet("For the following exercises,", 10)).to.equal("For the fo…")
  })
  it("Displays whole string when appropriate", () => {
    expect(snippet("Hello, world!", 20)).to.equal("Hello, world!")
  })
})



// console.log(functions)


// ("For the following exercises,", 10) // => "For the fo…"
