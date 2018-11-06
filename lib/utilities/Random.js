const mersenne = require('mersenne')
const Validate = require('./Validate')
const { number } = require('../data/constants')

class Random {

    /**
     * Generates a random number from the given ceiling range
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} size - the cieling range
     * @return {number} a random number
     * @throws {TypeError} when size is not a number type
     * 
     */
    static number(size) {
        Validate.number(size)
        return mersenne.rand(size)
    }

    /**
     * Randomly selects an element from the given array
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {array} array - contains elements to select from
     * @return {*} a randomly slected element
     * @throws {TypeError} when the passed in arg is not an array
     * 
     */
    static arrayElement(array) {
        Validate.array(array)
        const rIndex = Random.number(array.length - 1)
        return array[rIndex]
    }


    /**
     * Randomly selects element(s) fromt eh given array and element count
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {array} array - contains elements to select from
     * @param {number} count - desired number of elements
     * @param {string} separator - desired string used as separator used in array#join(separator) fro the result string
     * @return {*} a randomly slected elements concatenated with the separator string
     * @throws {TypeError} when the passed in array and count are not array and number respectively
     * 
     * separator samples:
     *    '', ' ', ',',  '\n'
     */
    static arrayElements(array, count, separator) {
        Validate.array(array)
        Validate.number(count)
        const randElements = []
        for (let i = 0; i < count; i++) {
            randElements.push(Random.arrayElement(array))
        }
        separator = separator || ''
        Validate.string(separator)
        return randElements.join(separator)
    }

    /**
     * Generates a random date betwenn the given date interval
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} interval interval literal object indicating the request date should fall between startDate and endDate
     * @return {Date} a random date between the given interval
     * @throws {TypeError} when inveral is not given, null or undefined
     * 
     * // sample invertval
     * const interval = {startDate: new Date(1970, 0, 1), endDate: new Date(1980, 0, 1)}
     * 
     */
    static date(interval) {
        Validate.interval(interval)
        const { startDate, endDate } = interval
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }

    /**
     * Generates a random phone number with '(###) ###-####' format
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {number} a random phone number
     * 
     */
    static phone() {
        return `(${Random.arrayElements(number, 3)}) ${Random.arrayElements(number, 3)}-${Random.arrayElements(number, 4)}`
    }
}

module.exports = Random