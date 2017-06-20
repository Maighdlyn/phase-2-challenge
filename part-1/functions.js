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
function filterBetween (array, min, max) {
  var newArray = []
  for(i=0; i<array.length; i++){
    if (array[i] >= min && array[i] <= max)
    newArray.push(array[i])
  }
  return newArray
}

// module.exports = function (){
//   return 'hellos'
// }

function hello(){
  return "hello"
}


module.exports = {
  hello: hello(),
  snippet: function (string, maxLength) {
    if (string.length > maxLength) {
      var shortenedString = string.slice(0,maxLength) + "..."
      return shortenedString
    }
    else {
      return string
    }
  },
  numProps: numProps({}),
  filterBetween: filterBetween([])
}
