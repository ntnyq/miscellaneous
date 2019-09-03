const WebSocket = require('ws')
const port = 12345
const wss = new WebSocket.Server({ port })

console.log(`WS SERVER started at port ${port}...`)

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`SERVER RECEIVED：${message}`)
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })
})
