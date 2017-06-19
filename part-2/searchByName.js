var clients = require('./clients.json')

function searchByName(name){
  for(i = 0; i < clients.length; i++) {
    if (clients[i].rep_name.startsWith(name)){
      console.log("id:", clients[i].id, "name:", clients[i].rep_name)
    }
  }
}
