require('dotenv').config()

module.exports = {
    options: {
        debug: false
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
    },
    channels: [
        process.env.CHANNELS
    ]
}