module.exports = {
  snippet:
    function (string, maxLength) {
      if (string.length > maxLength) {
        var shortenedString = string.slice(0,maxLength) + "..."
        return shortenedString
      }
      else {
        return string
      }
    },

  numProps:
    function (obj) {
      return Object.keys(obj).length
    },

  filterBetween:
    function (array, min, max) {
      var newArray = []
      for(i=0; i<array.length; i++){
        if (array[i] >= min && array[i] <= max)
        newArray.push(array[i])
      }
      return newArray
    }
}
