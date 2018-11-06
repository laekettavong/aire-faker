/* eslint-env mocha */
import { assert, expect } from 'chai'
import Blog from '../lib/model/Blog'

describe('Faker.Blog', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Blog.author())
        assert.isString(Blog.title())
        assert.isString(Blog.body())
        assert.isString(Blog.date())
        expect(Blog.author()).to.be.a('string')
        expect(Blog.title()).to.be.a('string')
        expect(Blog.body()).to.be.a('string')
        expect(Blog.date()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Returns a number`, (done) => {
        assert.isNumber(Blog.likes())
        expect(Blog.likes()).to.be.a('number')
        done()
    })

    it(`(${++counter}) Returns a literal object`, (done) => {
        assert.isObject(Blog.comments())
        assert.isObject(Blog.toJSON())
        expect(Blog.comments()).to.be.a('object')
        expect(Blog.toJSON()).to.be.a('object')
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(Blog.author().length, 0)
        assert.isAbove(Blog.title().length, 0)
        assert.isAbove(Blog.body().length, 0)
        assert.isAbove(Blog.date().length, 0)
        assert.isAbove(Blog.body().length, 0)
        assert.isAbove(Blog.likes(), 0)
        assert.isNotEmpty(Blog.toJSON())
        done()
    })

    it(`(${++counter}) Has properties`, (done) => {
        assert.property(Blog.toJSON(), 'author')
        assert.property(Blog.toJSON(), 'created')
        assert.property(Blog.toJSON(), 'title')
        assert.property(Blog.toJSON(), 'body')
        assert.property(Blog.toJSON(), 'likes')
        assert.property(Blog.toJSON(), 'comments')
        assert.hasAllKeys(Blog.toJSON(), ['author', 'created', 'title', 'body', 'likes', 'comments'])
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Blog.author(), Error)
        assert.doesNotThrow(() => Blog.title(), Error)
        assert.doesNotThrow(() => Blog.body(), Error)
        assert.doesNotThrow(() => Blog.date(), Error)
        assert.doesNotThrow(() => Blog.likes(), Error)
        assert.doesNotThrow(() => Blog.comments(), Error)
        assert.doesNotThrow(() => Blog.toJSON(), Error)
        done()
    })
})