const Random = require('../utilities/Random')
const { number } = require('../data/constants')
const address = require('../data/addresses')

class Address {

    /**
     * Generates a random street address - building number and street name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} building number and street name
     * @example
     * 
     * faker.address.address()
     * // -> '8288 Pine Street'
     * 
     */
    static address() {
        return `${Random.arrayElements(number, 4)} ${Random.arrayElement(address.streets)} ${Random.arrayElement(address.streetTypes)}`
    }

    /**
     * Generates a random state
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} state name
     * @example
     * 
     * faker.address.state()
     * // -> 'Vermont'
     * 
     */
    static state() {
        return Random.arrayElement(address.states)
    }

    /**
     * Generates a random state abbreviation
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} state abbreviation
     * @example
     * 
     * faker.address.stateAbbrev()
     * // -> 'NY'
     * 
     */
    static stateAbbrev() {
        return Random.arrayElement(address.stateAbbrevs)
    }

    /**
     * Generates a random generic city name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} generic city name
     * @example
     * 
     * faker.address.city()
     * // -> 'Alexandria Bay'
     * 
     */
    static city() {
        return Random.arrayElement(address.cities)
    }

    /**
     * Generates a random 5 digit numeric value to represent zip code
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} zip code string
     * @example
     * 
     * faker.address.zip()
     * // -> 79345
     * 
     */
    static zip() {
        return Number.parseInt(Random.arrayElements(number, 5))
    }

    /**
     * Generates a random address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} zip code string
     * @example
     * 
     * faker.address.toString()
     * // -> 
     * '9118 Sycamore Court
     * Newport, California 27713'
     * 
     */
    static toString() {
        return `${Address.address()}\n${Address.city()}, ${Address.state()} ${Address.zip()}`
    }

    /**
     * Generates a JSON representation of a typical US address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} address JSON
     * @example
     * 
     * faker.address.toJSON()
     * // -> 
     * {
     *   street: '8163 Main Road',
     *   city: 'Georgetown',
     *   state: 'Mississippi',
     *   zip: 15197,
     *   locale: 'Georgetown, Mississippi 15197'
     * }
     * 
     */
    static toJSON() {
        const street = Address.address()
        const city = Address.city()
        const state = Address.state()
        const zip = Address.zip()
        const locale = `${city}, ${state} ${zip}`
        return { street, city, state, zip, locale }
    }
}

module.exports = Address