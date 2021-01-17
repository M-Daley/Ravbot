const tmi = require('tmi.js')
const config = require('./config.js')
const onMessageHandler = require('./handlers/message.js')
const onConnectHandler = require('./handlers/connect.js')
const client = new tmi.client(config)

// Register event handlers
client.on('message', onMessageHandler)
client.on('connected', onConnectHandler)

client.connect()