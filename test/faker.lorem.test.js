/* eslint-env mocha */
import { assert, expect } from 'chai'
import Lorem from '../lib/model/Lorem'

describe('Faker.Lorem', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Lorem.words())
        assert.isString(Lorem.lists())
        assert.isString(Lorem.short())
        assert.isString(Lorem.long())
        expect(Lorem.words()).to.be.a('string')
        expect(Lorem.lists()).to.be.a('string')
        expect(Lorem.short()).to.be.a('string')
        expect(Lorem.long()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(Lorem.words().length, 0)
        assert.isAbove(Lorem.lists().length, 0)
        assert.isAbove(Lorem.short().length, 0)
        assert.isAbove(Lorem.long().length, 0)
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Lorem.words(), Error)
        assert.doesNotThrow(() => Lorem.lists(), Error)
        assert.doesNotThrow(() => Lorem.short(), Error)
        assert.doesNotThrow(() => Lorem.long(), Error)
        assert.doesNotThrow(() => Lorem.words(2, 'arbitrary'), Error)
        assert.doesNotThrow(() => Lorem.lists(1, 'arbitrary'), Error)
        assert.doesNotThrow(() => Lorem.short(4, 'arbitrary'), Error)
        assert.doesNotThrow(() => Lorem.long(3, 'arbitrary'), Error)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - words()`, (done) => {
        assert.throws(() => Lorem.words(true), TypeError)
        expect(() => Lorem.words('5')).to.throw(TypeError)
        expect(() => Lorem.words([])).to.throw(TypeError)
        expect(() => Lorem.words({})).to.throw(TypeError)
        expect(() => Lorem.words(new Date())).to.throw(TypeError)
        expect(() => Lorem.words(Symbol())).to.throw(TypeError)
        expect(() => Lorem.words(1, 8)).to.throw(TypeError)
        expect(() => Lorem.words(1, true)).to.throw(TypeError)
        expect(() => Lorem.words(1, [])).to.throw(TypeError)
        expect(() => Lorem.words(1, {})).to.throw(TypeError)
        expect(() => Lorem.words(1, new Date())).to.throw(TypeError)
        expect(() => Lorem.words(1, Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - lists()`, (done) => {
        assert.throws(() => Lorem.lists(true), TypeError)
        expect(() => Lorem.lists('5')).to.throw(TypeError)
        expect(() => Lorem.lists([])).to.throw(TypeError)
        expect(() => Lorem.lists({})).to.throw(TypeError)
        expect(() => Lorem.lists(new Date())).to.throw(TypeError)
        expect(() => Lorem.lists(Symbol())).to.throw(TypeError)
        expect(() => Lorem.lists(1, 8)).to.throw(TypeError)
        expect(() => Lorem.lists(1, true)).to.throw(TypeError)
        expect(() => Lorem.lists(1, [])).to.throw(TypeError)
        expect(() => Lorem.words(1, {})).to.throw(TypeError)
        expect(() => Lorem.lists(1, new Date())).to.throw(TypeError)
        expect(() => Lorem.lists(1, Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - short()`, (done) => {
        assert.throws(() => Lorem.short(true), TypeError)
        expect(() => Lorem.short('5')).to.throw(TypeError)
        expect(() => Lorem.short([])).to.throw(TypeError)
        expect(() => Lorem.short({})).to.throw(TypeError)
        expect(() => Lorem.short(new Date())).to.throw(TypeError)
        expect(() => Lorem.short(Symbol())).to.throw(TypeError)
        expect(() => Lorem.short(1, 8)).to.throw(TypeError)
        expect(() => Lorem.short(1, true)).to.throw(TypeError)
        expect(() => Lorem.short(1, [])).to.throw(TypeError)
        expect(() => Lorem.short(1, {})).to.throw(TypeError)
        expect(() => Lorem.short(1, new Date())).to.throw(TypeError)
        expect(() => Lorem.short(1, Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - long()`, (done) => {
        assert.throws(() => Lorem.long(true), TypeError)
        expect(() => Lorem.long('5')).to.throw(TypeError)
        expect(() => Lorem.long([])).to.throw(TypeError)
        expect(() => Lorem.long({})).to.throw(TypeError)
        expect(() => Lorem.long(new Date())).to.throw(TypeError)
        expect(() => Lorem.long(Symbol())).to.throw(TypeError)
        expect(() => Lorem.long(1, 8)).to.throw(TypeError)
        expect(() => Lorem.long(1, true)).to.throw(TypeError)
        expect(() => Lorem.long(1, [])).to.throw(TypeError)
        expect(() => Lorem.long(1, {})).to.throw(TypeError)
        expect(() => Lorem.long(1, new Date())).to.throw(TypeError)
        expect(() => Lorem.long(1, Symbol())).to.throw(TypeError)
        done()
    })
})