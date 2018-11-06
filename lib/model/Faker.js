class Faker {
    constructor() {
        this.credential = require('./Credential')
        this.person = require('./Person')
        this.address = require('./Address')
        this.email = require('./Email')
        this.lorem = require('./Lorem')
        this.college = require('./College')
        this.company = require('./Company')
        this.blog = require('./Blog')
        this.comment = require('./Comment')
    }
}

// singleton
module.exports = Object.freeze(new Faker())