module.exports = {
  weekday:
    function weekday(date){
      var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      return daysOfWeek[date.getDay()]
    },

  snippet:
    function snippet (string, maxLength) {
      if (string.length > maxLength) {
        var shortenedString = string.slice(0,maxLength) + "..."
        return shortenedString
      }
      else {
        return string
      }
    },

  numProps:
    function numProps(obj) {
      return Object.keys(obj).length
    },

  filterBetween:
    function filterBetween (array, min, max) {
      var newArray = []
      for(i=0; i<array.length; i++){
        if (array[i] >= min && array[i] <= max)
        newArray.push(array[i])
      }
      return newArray
    }
}
