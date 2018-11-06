const Random = require('../utilities/Random')
const Validate = require('../utilities/Validate')
const ipsum = require('../data/lorem')
const constants = require('../data/constants')

class Lorem {

    /**
     * Generates random 'Lorem' words 
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional count number of words requesting
     * @param {string} optional separator array.split() string
     * @return {string} Lorem string of words
     * @example
     * 
     * faker.lorem.words([count], [separator])
     * // -> 'porttitor nisi vulputate odio maecenas'
     * 
     */
    static words(count, separator) {
        count = count || constants.loremCount
        separator = separator || ' '
        Validate.number(count)
        Validate.string(separator)
        return Random.arrayElements(ipsum.words, count, separator)
    }

    /**
     * Generates random 'Lorem' lists of words
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional count - number of word lists requesting
     * @param {string} optional separator -  array.split() string
     * @return {string} Lorem string of words
     * @example
     * 
     * faker.lorem.words([count], [separator])
     * // ->
     * 'Aenean congue eros eget iaculis facilisis.
     *  In consequat ante sed leo elementum, vel convallis orci scelerisque.
     *  Donec finibus quam et mi placerat ornare.
     *  Mauris aliquet purus vel rutrum ultricies.
     *  In aliquam ligula sed nibh venenatis luctus.'
     * 
     */
    static lists(count, separator) {
        count = count || constants.loremCount
        separator = separator || '\n'
        Validate.number(count)
        Validate.string(separator)
        return Random.arrayElements(ipsum.lists, count, separator)
    }

    /**
     * Generates random short paragraph of 'Lorem' words
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional count - number of word lists requesting
     * @param {string} optional separator - array.split() string
     * @return {string} Lorem string of words
     * @example
     * 
     * faker.lorem.short([count], [separator])
     * // ->
     * Suspendisse eu magna accumsan, vehicula ipsum a, dapibus tellus. Ut pretium, lorem ac tristique...'
     * 
     */
    static short(count, separator) {
        count = count || constants.loremCount
        separator = separator || '\n'
        Validate.number(count)
        Validate.string(separator)
        return Random.arrayElements(ipsum.short, count, separator)
    }

    /**
     * Generates random long paragraph of 'Lorem' words
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional count - number of word lists requesting
     * @param {string} optional separator - array.split() string
     * @return {string} Lorem string of words
     * @example
     * 
     * faker.lorem.long([count], [separator])
     * // ->
     * Suspendisse eu magna accumsan, vehicula ipsum a, dapibus tellus. Ut pretium, lorem ac tristique...'
     * 
     */
    static long(count, separator) {
        count = count || constants.loremCount
        separator = separator || '\n'
        Validate.number(count)
        Validate.string(separator)
        return Random.arrayElements(ipsum.long, count, separator)
    }
}

module.exports = Lorem