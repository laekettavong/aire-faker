const Random = require('../utilities/Random')
const Person = require('./Person')
const Lorem = require('./Lorem')
const Comment = require('./Comment')
const { dateIntervals, dateOptions } = require('../data/constants')

class Blog {

    /**
     * Generates a random full name (first and last)
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} blog author
     * @example
     * 
     * faker.blog.author()
     * // -> 'Allen Lewis'
     * 
     */
    static author() {
        return Person.fullName()
    }

    /**
     * Generates a random 'Lorem' string to represent the blog title
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} blog title
     * @example
     * 
     * faker.blog.title()
     * // -> 'Vestibulum quis sem non erat pretium aliquam.'
     * 
     */
    static title() {
        return Lorem.lists(1)
    }

    /**
     * Generates a random 'Lorem' string to represent the blog content
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} blog content
     * @example
     * 
     * faker.blog.body()
     * // -> 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...'
     * 
     */
    static body() {
        return Lorem.long()
    }

    /**
     * Generates a random date to represent the blog creation date
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} blog creation date
     * @example
     * 
     * faker.blog.date()
     * // -> 'May 10, 2017
     * 
     */
    static date() {
        const options = dateOptions.enUs
        const { locale } = options
        return Random.date(dateIntervals.blogCreated).toLocaleDateString(locale, options)
    }

    /**
     * Generates a random number to represent the number of likes for the blog
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {number} blog 'likes' count
     * @example
     * 
     * faker.blog.likes()
     * // -> 178
     * 
     */
    static likes() {
        return Random.number(1000)
    }

    /**
     * Generates a random literal object with blog info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} blog JSON
     * @example
     * 
     * faker.blog.comments()
     * // ->
     * {
     *   author: 'Peter Barker',
     *   date: 'Sep 12, 2017',
     *   message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices...,
     *   likes: 300
     * }
     * 
     */
    static comments() {
        return Comment.toJSON()
    }

    /**
     * Generates a JSON representation of a blog post
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} blog post JSON
     * @example
     * 
     * faker.blog.toJSON()
     * // -> 
     * {
     *   author: 'Alexander Johnson',
     *   created: 'Oct 7, 2016',
     *   title: 'Donec nec turpis eget turpis lobortis rhoncus.',
     *   body: 'Pellentesque habitant morbi tristique senectus...
     *              .
     *              .
     *              .
     *   likes: 106,
     *   comments:
     *      [ { author: 'Gary Nelson',
     *      date: 'Apr 6, 2018',
     *              .
     *              .
     *              .
     */
    static toJSON() {
        const author = Blog.author()
        const created = Blog.date()
        const title = Blog.title()
        const body = Blog.body()
        const likes = Blog.likes()
        const comments = []
        const count = Random.number(6)
        let index = 0
        while (index++ < count) {
            comments.push(Blog.comments())
        }
        return { author, created, title, body, likes, comments }
    }
}

module.exports = Blog