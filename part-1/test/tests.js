const expect = require('chai').expect
const snippet = require('../functions.js').snippet
const numProps = require('../functions.js').numProps
const filterBetween = require('../functions.js').filterBetween


describe("Get a snippet from text", (done) => {
  it('Shortens string correctly', () => {
    let result = snippet("For the following exercises,", 10)
    expect(result).to.equal("For the fo...")
  })
  it("Displays whole string when shorter than maxLength", () =>{
    let result = snippet("Hello, world!", 20)
    expect(result).to.equal("Hello, world!")
  })
  // it("Throws errors with unexpected input", () => {
  //   let result = snippet("I'm a string", "I'm also a string")
  //
  // })
})


//   it("Displays whole string when appropriate", () => {
//     expect(snippet("Hello, world!", 20)).to.equal("Hello, world!")
//   })
// })

// ("For the following exercises,", 10) // => "For the fo…"
// })
