class Validate {
    static checkGender = (gender) => {
        if (typeof gender !== 'number') throw new TypeError('Gender must be 0 or 1')
        return gender !== 0 && gender !== 1 ? 0 : 1
    }
}

module.exports = Validate