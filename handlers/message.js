const prefix = process.env.COMMAND_PREFIX
const diceRoll = require('../commands/dice')
const pronouns = require('../commands/pronouns')
const discordLink = require('../commands/discord')
const lgbtLink = require('../commands/lgbt')
const logger = require('../utils/logger')

// TODO: Create types for switch statement... maybe just redux?

const onMessageHandler = (target, context, msg, self, client) => {
    if (self) return

    const commandName = msg.trim()

    console.log(`Target: ${target}\n Diceroll: ${diceRoll(target)}`)

    switch(commandName) {
        case `${prefix}dice`:
            client.say(target, diceRoll(target))
            logger(commandName, target)
            break

        case `${prefix}pronouns`:
            client.say(target, pronouns())
            logger(commandName, target)
            break

        case `${prefix}discord`:
            client.say(target, discordLink())
            logger(commandName, target)
            break

        case `${prefix}lgbt`:
            client.say(target, lgbtLink())
            logger(commandName, target)
            break

        default:
            console.log(`* Unknown command ${commandName}`)
            break
    }
}

module.exports = onMessageHandler