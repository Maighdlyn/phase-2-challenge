module.exports = {
  weekday:
    function weekday(date){
      if(date instanceof Date === false){
        return "Input must be date"
      }
      else{
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return daysOfWeek[date.getDay()]
      }
    },

  snippet:
    function snippet (string, maxLength) {
      if (typeof string != 'string' || typeof maxLength != 'number'
    ){
        return "Inputs must be a string and a number!"
      }
      else if (string.length > maxLength) {
        var shortenedString = string.slice(0,maxLength) + "..."
        return shortenedString
      }
      else {
        return string
      }
    },

  numProps:
    function numProps(obj) {
      if(typeof obj != 'object'){
        return "Input must be an object!"
      }
      else{
        return Object.keys(obj).length
      }
    },

  filterBetween:
    function filterBetween (array, min, max) {
      if(typeof array != 'array'){
        // || typeof min != 'number'
        // || typeof max != 'number'
      // ) {
          return "Input must be an array then two numbers!"
        }
      else {
        var newArray = []
        for(i=0; i<array.length; i++){
          if (array[i] >= min && array[i] <= max)
          newArray.push(array[i])
        }
        return newArray
      }
    }
}

let date = (2017, 5, 19)
console.log(date instanceof Date)
