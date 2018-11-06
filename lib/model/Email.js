const Random = require('../utilities/Random')
const Validate = require('../utilities/Validate')
const { males, females, last } = require('../data/names')
const { names } = require('../data/companies')
const { abbrevs } = require('../data/colleges')
const { sex, emailHosts, emailExtensions } = require('../data/constants')

class Email {

    /**
     * Generates a random personal email address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} personal email address
     * @example
     * 
     * faker.email.person()
     * // -> 'carmen.peterson@earthlink.us'
     * 
     */
    static person(gender) {
        gender = gender || Random.arrayElement(sex)
        let userName = Validate.gender(gender) === 0 ? Random.arrayElement(males) : Random.arrayElement(females)
        userName = `${userName}.${Random.arrayElement(last)}`
        return `${userName.toLowerCase()}@${Random.arrayElement(emailHosts)}${Random.arrayElement(emailExtensions)}`
    }

    /**
     * Generates a random college email address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college email address
     * @example
     * 
     * faker.email.college()
     * // -> 'contact@hsu.edu'
     * 
     */
    static college() {
        const company = Random.arrayElement(abbrevs).toLowerCase()
        return `contact@${company}.edu`
    }

    /**
     * Generates a random company email address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company email address
     * @example
     * 
     * faker.email.company()
     * // -> 'info@roxxonenergycorporation.com'
     * 
     */
    static company() {
        const company = Random.arrayElement(names).replace(/[\s|,]/gi, '').toLowerCase()
        return `info@${company}.com`
    }
}

module.exports = Email