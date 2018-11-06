const Checker = require('aire-checker')
const { locale } = require('../data/constants')

class Validate {

    /**
     * Determines if the given argument is an array and is not empty
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {array} array - target under validation
     * @return {array} the same array
     * @throws {TypeError} when the argument is either not an array or is empty
     * 
     */
    static array(array) {
        Checker.arraysOnly(array)
        if (Checker.isEmpty(array)) throw new TypeError('Array is empty')
        return array
    }

    /**
     * Determines if the given argument is an boolean
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} bool - target under validation
     * @return {boolean} the same bool
     * @throws {TypeError} when the argument is not a boolean
     * 
     */
    static boolean(bool) {
        Checker.booleansOnly(bool)
        return bool
    }

    /**
     * Determines if the given argument is a date
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {Date} date - target under validation
     * @return {Date} the same date
     * @throws {TypeError} when the argument is not a date
     * 
     */
    static date(date) {
        Checker.datesOnly(date)
        return date
    }

    /**
     * Determines if the given argument is a validate gender
     * 
     * expect number values:
     *    0 -> male
     *    1 -> female
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} gender - target under validation
     * @return {number} the same number
     * @throws {TypeError} when the argument is not 0 or 1
     * 
     */
    static gender(gender) {
        if (Checker.isUndefined(gender) || !Checker.isNumber(gender) || Checker.isGreaterThan(gender, 1) || Checker.isLessThan(gender, 0)) throw new TypeError('Gender must be 0 or 1')
        return gender
    }

    /**
     * Determines if the given date interval is valid
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} interval - target under validation, literal object must contatin startDate and endDate properties with corresponding valid dates
     * @return {object} the same literal object
     * @throws {TypeError} when inveral is not given, null, undefined, or either of the dates within is invalide
     * 
     * 
     */
    static interval(interval) {
        if (Checker.isUndefined(interval)) throw new TypeError('Interval must include startDate and endDate')
        const { startDate, endDate } = interval
        Checker.datesOnly(startDate, endDate)
        return interval
    }

    /**
     * Determines if the given locale code is valide
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {string} locale - target under validation
     * @return {string} the same local string
     * @throws {TypeError} when the argument is not a string type or not supported
     * 
     */
    static locale(code) {
        Checker.stringsOnly(code)
        if (!locale.includes(code)) throw new TypeError('Unsupported locale')
        return code
    }

    /**
     * Determines if the given argument is a number
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} num - target under validation
     * @return {number} the same number
     * @throws {TypeError} when the argument is not a number type
     * 
     */
    static number(num) {
        Checker.numbersOnly(num)
        return num
    }

    /**
     * Determines if the given argument is a null or undefined
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {*} target - subject under validation
     * @return {*} the same string
     * @throws {TypeError} when the argument is either null or undefined
     * 
     */
    static nullOrUndefined(target) {
        Checker.argsWithValuesOnly(target)
        return target
    }

    /**
     * Determines if the given argument is a string
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {string} str - target under validation
     * @return {string} the same string
     * @throws {TypeError} when the argument is not a string type
     * 
     */
    static string(str) {
        Checker.stringsOnly(str)
        return str
    }
}

module.exports = Validate