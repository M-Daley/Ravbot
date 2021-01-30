const tmi = require('tmi.js')
const config = require('./config.js')
const onConnectHandler = require('./handlers/connect.js')
const onMessageHandler = require('./handlers/message.js')
const client = new tmi.client(config)

client.connect()

// Register event handlers
client.on('connected', onConnectHandler)
client.on('message', (target, context, message, self) => {
    onMessageHandler(target, context, message, self, client)
})