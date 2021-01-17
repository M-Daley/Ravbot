function dice() {
    return `You rolled a ${Math.floor(Math.random() * 6) + 1}`
}

module.exports = dice