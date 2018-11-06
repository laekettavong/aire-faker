const Validate = require('./Validate')

class AireDate extends Date {

    /**
     * Validates the startDate and endDate of a given date interval
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} interval literal object with the desired date window, must contain startDate and endDate
      * @throws {TypeError} when an invalidate is encountered
     * @example
     * 
     */
    static randomDate({ startDate, endDate }) {
        Validate.date(startDate)
        Validate.date(endDate)
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }

    /**
     * Calculates a person's age based on the birthday
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {Date} dob - the person birthday
     * @return {number} the person's age
     * @throws {TypeError} when dob is an invalid date
     * @example
     * 
     */
    static calculateAge(dob) {
        Validate.date(dob)
        const now = new Date()
        let age = now.getFullYear() - dob.getFullYear()
        const month = now.getMonth() - dob.getMonth()
        const day = now.getDate() - dob.getDate()
        if (month < 0) {
            age--
        }
        if (month === 0 && day < 0) {
            age--
        }
        return age
    }
}

module.exports = AireDate