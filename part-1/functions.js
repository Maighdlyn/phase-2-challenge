// Show a weekday

// Get a snippet from text
function snippet (string, maxLength) {
  if (string.length > maxLength) {
    var shortenedString = string.slice(0,maxLength) + "..."
    return shortenedString
  }
  else {
    console.log("not it!")
    return string
  }
}

snippet ("hello", 2)
