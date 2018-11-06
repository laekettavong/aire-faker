const Random = require('../utilities/Random')
const Person = require('./Person')
const Lorem = require('./Lorem')
const { dateIntervals, dateOptions } = require('../data/constants')

class Comment {

    /**
     * Generates a random full name (first and last)
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} comment author
     * @example
     * 
     * faker.comment.author()
     * // -> 'Adam Slater'
     * 
     */
    static author() {
        return Person.fullName()
    }

    /**
     * Generates a random date to represent the comment creation date
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} comment creation date
     * @example
     * 
     * faker.comment.date()
     * // -> 'Oct 7, 2017'
     * 
     */
    static date() {
        const options = dateOptions.enUs
        const { locale } = options
        return Random.date(dateIntervals.commentCreated).toLocaleDateString(locale, options)
    }

    /**
     * Generates a random 'Lorem' string to represent user comment
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} comment creation date
     * @example
     * 
     * faker.comment.message()
     * // -> 'Oct 7, 2017'
     * 
     */
    static message() {
        return Lorem.short(2)
    }

    /**
     * Generates a random number to represent the number of likes for thecomment
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {number} comment 'likes' count
     * @example
     * 
     * faker.comment.likes()
     * // -> 210
     * 
     */
    static likes() {
        return Random.number(1000)
    }

    /**
     * Generates a random number to represent the number of likes for thecomment
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} comment JSON
     * @example
     * 
     * faker.comment.toJSON()
     * // ->
     * {
     *   author: 'Peter Barker',
     *   date: 'Sep 12, 2017',
     *   message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices...,
     *   likes: 300
     * }
     * 
     */
    static toJSON() {
        const author = Comment.author()
        const date = Comment.date()
        const message = Comment.message()
        const likes = Comment.likes()
        return { author, date, message, likes }
    }
}

module.exports = Comment