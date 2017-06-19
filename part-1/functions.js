// Show a weekday

// Get a snippet from text
function snippet (string, maxLength) {
  if (string.length > maxLength) {
    var shortenedString = string.slice(0,maxLength) + "..."
    return shortenedString
  }
  else {
    return string
  }
}

// Number of properties
function numProps(obj) {
  return Object.keys(obj).length
}

// Filter between
