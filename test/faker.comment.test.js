/* eslint-env mocha */
import { assert, expect } from 'chai'
import Comment from '../lib/model/Comment'

describe('Faker.Comment', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Comment.author())
        assert.isString(Comment.message())
        assert.isString(Comment.date())
        expect(Comment.author()).to.be.a('string')
        expect(Comment.message()).to.be.a('string')
        expect(Comment.date()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Returns a number`, (done) => {
        assert.isNumber(Comment.likes())
        expect(Comment.likes()).to.be.a('number')
        done()
    })

    it(`(${++counter}) Returns a literal object`, (done) => {
        assert.isObject(Comment.toJSON())
        expect(Comment.toJSON()).to.be.a('object')
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(Comment.author().length, 0)
        assert.isAbove(Comment.date().length, 0)
        assert.isAbove(Comment.message().length, 0)
        assert.isAbove(Comment.likes(), 0)
        assert.isNotEmpty(Comment.toJSON())
        done()
    })

    it(`(${++counter}) Has properties`, (done) => {
        assert.property(Comment.toJSON(), 'author')
        assert.property(Comment.toJSON(), 'date')
        assert.property(Comment.toJSON(), 'message')
        assert.property(Comment.toJSON(), 'likes')
        assert.hasAllKeys(Comment.toJSON(), ['author', 'date', 'likes', 'message'])
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Comment.author(), Error)
        assert.doesNotThrow(() => Comment.date(), Error)
        assert.doesNotThrow(() => Comment.message(), Error)
        assert.doesNotThrow(() => Comment.likes(), Error)
        assert.doesNotThrow(() => Comment.toJSON(), Error)
        done()
    })
})