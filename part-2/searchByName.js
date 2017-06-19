var clients = require('./clients.json')

function searchByName(name){
  for(i = 0; i < clients.length; i++) {
    console.log(clients[i].rep_name)
  }
}

console.log(searchByName())
