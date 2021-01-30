function dice(name) {
    return `${name} rolled a ${Math.floor(Math.random() * 6) + 1}`
}

module.exports = dice