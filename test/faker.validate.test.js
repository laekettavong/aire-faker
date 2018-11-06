/* eslint-env mocha */
import { assert, expect } from 'chai'
import Validate from '../lib/utilities/Validate'
import { words } from '../lib/data/Lorem'


describe('Faker.Validate', () => {
    let counter = 0
    let dob = {}
    let date1 = null
    let date2 = null


    before((done) => {
        date1 = new Date(1980, 0, 1)
        date2 = new Date(1990, 0, 1)
        dob = { startDate: date1, endDate: date2 }
        done()
    })

    after((done) => {
        date1 = undefined
        date2 = undefined
        dob = undefined
        done()
    })

    it(`(${++counter}) Returns valid results`, (done) => {
        assert.isNotNull(Validate.array(words))
        assert.isNotNull(Validate.boolean(true))
        assert.isNotNull(Validate.date(date1))
        assert.isNotNull(Validate.gender(0))
        assert.isNotNull(Validate.interval(dob))
        assert.isNotNull(Validate.locale('en-US'))
        assert.isNotNull(Validate.number(10))
        assert.isNotNull(Validate.nullOrUndefined(true))
        assert.isNotNull(Validate.string('hello'))
        assert.isAbove(Validate.string('hello').length, 0)
        expect(Validate.array(words)).to.be.a('array')
        expect(Validate.boolean(false)).to.be.a('boolean')
        expect(Validate.gender(1)).to.be.a('number')
        expect(Validate.date(date1)).to.be.a('date')
        expect(Validate.interval(dob)).to.be.a('object')
        expect(Validate.locale('en-US')).to.be.a('string')
        expect(Validate.number(10)).to.be.a('number')
        expect(Validate.string('hello')).to.be.a('string')
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - array()`, (done) => {
        assert.throws(() => Validate.array([]), TypeError)
        expect(() => Validate.array([])).to.throw(TypeError)
        expect(() => Validate.array(123)).to.throw(TypeError)
        expect(() => Validate.array('hello')).to.throw(TypeError)
        expect(() => Validate.array(true)).to.throw(TypeError)
        expect(() => Validate.array({})).to.throw(TypeError)
        expect(() => Validate.array(new Date())).to.throw(TypeError)
        expect(() => Validate.array(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.array()).to.throw(TypeError)
        expect(() => Validate.array(null)).to.throw(TypeError)
        expect(() => Validate.array(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - boolean()`, (done) => {
        assert.throws(() => Validate.boolean([]), TypeError)
        expect(() => Validate.boolean([])).to.throw(TypeError)
        expect(() => Validate.boolean([1, 2, 3])).to.throw(TypeError)
        expect(() => Validate.boolean(123)).to.throw(TypeError)
        expect(() => Validate.boolean('hello')).to.throw(TypeError)
        expect(() => Validate.boolean({})).to.throw(TypeError)
        expect(() => Validate.boolean(new Date())).to.throw(TypeError)
        expect(() => Validate.boolean(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.boolean()).to.throw(TypeError)
        expect(() => Validate.boolean(null)).to.throw(TypeError)
        expect(() => Validate.boolean(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - date()`, (done) => {
        assert.throws(() => Validate.date([]), TypeError)
        expect(() => Validate.date([])).to.throw(TypeError)
        expect(() => Validate.date([1, 2, 3])).to.throw(TypeError)
        expect(() => Validate.date(123)).to.throw(TypeError)
        expect(() => Validate.date('hello')).to.throw(TypeError)
        expect(() => Validate.date(true)).to.throw(TypeError)
        expect(() => Validate.date({})).to.throw(TypeError)
        expect(() => Validate.date(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.date()).to.throw(TypeError)
        expect(() => Validate.date(null)).to.throw(TypeError)
        expect(() => Validate.date(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - gender()`, (done) => {
        assert.throws(() => Validate.gender([]), TypeError)
        expect(() => Validate.gender([])).to.throw(TypeError)
        expect(() => Validate.gender(3)).to.throw(TypeError)
        expect(() => Validate.gender(-1)).to.throw(TypeError)
        expect(() => Validate.gender('hello')).to.throw(TypeError)
        expect(() => Validate.gender(true)).to.throw(TypeError)
        expect(() => Validate.gender({})).to.throw(TypeError)
        expect(() => Validate.gender(new Date())).to.throw(TypeError)
        expect(() => Validate.gender(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.gender()).to.throw(TypeError)
        expect(() => Validate.gender(null)).to.throw(TypeError)
        expect(() => Validate.gender(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - interval()`, (done) => {
        assert.throws(() => Validate.interval([]), TypeError)
        expect(() => Validate.interval([])).to.throw(TypeError)
        expect(() => Validate.interval(123)).to.throw(TypeError)
        expect(() => Validate.interval('hello')).to.throw(TypeError)
        expect(() => Validate.interval(true)).to.throw(TypeError)
        expect(() => Validate.interval({})).to.throw(TypeError)
        expect(() => Validate.interval(new Date())).to.throw(TypeError)
        expect(() => Validate.interval(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.interval()).to.throw(TypeError)
        expect(() => Validate.interval(null)).to.throw(TypeError)
        expect(() => Validate.interval(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - locale()`, (done) => {
        assert.throws(() => Validate.locale([]), TypeError)
        expect(() => Validate.locale([])).to.throw(TypeError)
        expect(() => Validate.locale(123)).to.throw(TypeError)
        expect(() => Validate.locale('hello')).to.throw(TypeError)
        expect(() => Validate.locale('en-CA')).to.throw(TypeError)
        expect(() => Validate.locale(true)).to.throw(TypeError)
        expect(() => Validate.locale({})).to.throw(TypeError)
        expect(() => Validate.locale(new Date())).to.throw(TypeError)
        expect(() => Validate.locale(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.locale()).to.throw(TypeError)
        expect(() => Validate.locale(null)).to.throw(TypeError)
        expect(() => Validate.locale(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - number()`, (done) => {
        assert.throws(() => Validate.number([]), TypeError)
        expect(() => Validate.number([])).to.throw(TypeError)
        expect(() => Validate.number([1, '2', 3])).to.throw(TypeError)
        expect(() => Validate.number('hello')).to.throw(TypeError)
        expect(() => Validate.number('en-CA')).to.throw(TypeError)
        expect(() => Validate.number(true)).to.throw(TypeError)
        expect(() => Validate.number({})).to.throw(TypeError)
        expect(() => Validate.number(new Date())).to.throw(TypeError)
        expect(() => Validate.number(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.number()).to.throw(TypeError)
        expect(() => Validate.number(null)).to.throw(TypeError)
        expect(() => Validate.number(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - nullOrUndefined()`, (done) => {
        assert.throws(() => Validate.nullOrUndefined(null), TypeError)
        expect(() => Validate.nullOrUndefined(undefined)).to.throw(TypeError)
        expect(() => Validate.nullOrUndefined()).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - string()`, (done) => {
        assert.throws(() => Validate.string([]), TypeError)
        expect(() => Validate.string([])).to.throw(TypeError)
        expect(() => Validate.string([1, '2', 3])).to.throw(TypeError)
        expect(() => Validate.string(true)).to.throw(TypeError)
        expect(() => Validate.string({})).to.throw(TypeError)
        expect(() => Validate.string(new Date())).to.throw(TypeError)
        expect(() => Validate.string(Symbol('hello'))).to.throw(TypeError)
        expect(() => Validate.string()).to.throw(TypeError)
        expect(() => Validate.string(null)).to.throw(TypeError)
        expect(() => Validate.string(undefined)).to.throw(TypeError)
        done()
    })
})