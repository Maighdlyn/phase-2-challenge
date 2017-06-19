var clients = require('./clients.json')

for(i = 0; i < clients.length; i++) {
  if (clients[i].rep_name.startsWith(process.argv[2])){
    console.log("id:", clients[i].id, "name:", clients[i].rep_name)
  }
}
