/* eslint-env mocha */
import { assert, expect } from 'chai'
import Random from '../lib/utilities/Random'
import { words } from '../lib/data/Lorem'


describe('Faker.Random', () => {
    let counter = 0
    let dob = {}
    let date1 = null
    let date2 = null
    let interval1 = {}
    let interval2 = {}

    before((done) => {
        date1 = new Date(1980, 0, 1)
        date2 = new Date(1990, 0, 1)
        dob = { startDate: date1, endDate: date2 }
        interval1 = { startDate: null, endDate: date1 }
        interval2 = { startDate: date1, endDate: undefined }
        done()
    })

    after((done) => {
        date1 = undefined
        date2 = undefined
        dob = undefined
        interval1 = undefined
        interval2 = undefined
        done()
    })

    it(`(${++counter}) Returns valid results`, (done) => {
        assert.isNotNull(Random.number(10))
        assert.isNotNull(Random.arrayElement(words))
        assert.isNotNull(Random.arrayElements(words, 2))
        assert.isNotNull(Random.date(dob))
        assert.isNotNull(Random.phone())
        assert.isAbove(Random.number(10), -1)
        assert.isAbove(Random.arrayElement(words).length, 0)
        assert.isAbove(Random.arrayElements(words, 2).length, 0)
        assert.isAbove(Random.phone().length, 0)
        expect(Random.number(10)).to.be.a('number')
        expect(Random.arrayElement(words)).to.be.a('string')
        expect(Random.arrayElements(words, 2)).to.be.a('string')
        expect(Random.date(dob)).to.be.a('date')
        expect(Random.phone()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - number()`, (done) => {
        assert.throws(() => Random.number(true), TypeError)
        assert.throws(() => Random.number('10'), TypeError)
        assert.throws(() => Random.number([]), TypeError)
        assert.throws(() => Random.number({}), TypeError)
        expect(() => Random.number(false)).to.throw(TypeError)
        expect(() => Random.number('20')).to.throw(TypeError)
        expect(() => Random.number([])).to.throw(TypeError)
        expect(() => Random.number({})).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - arrayElement()`, (done) => {
        assert.throws(() => Random.arrayElement(true), TypeError)
        assert.throws(() => Random.arrayElement('true'), TypeError)
        assert.throws(() => Random.arrayElement(123), TypeError)
        assert.throws(() => Random.arrayElement([]), TypeError)
        assert.throws(() => Random.arrayElement({}), TypeError)
        expect(() => Random.arrayElement(false)).to.throw(TypeError)
        expect(() => Random.arrayElement('false')).to.throw(TypeError)
        expect(() => Random.arrayElement(123)).to.throw(TypeError)
        expect(() => Random.arrayElement([])).to.throw(TypeError)
        expect(() => Random.arrayElement({})).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - arrayElements()`, (done) => {
        assert.throws(() => Random.arrayElements(true), TypeError)
        assert.throws(() => Random.arrayElements(null), TypeError)
        assert.throws(() => Random.arrayElements(undefined), TypeError)
        assert.throws(() => Random.arrayElements([], 2), TypeError)
        assert.throws(() => Random.arrayElements(words, 2, 3), TypeError)
        expect(() => Random.arrayElements(false)).to.throw(TypeError)
        expect(() => Random.arrayElements(null)).to.throw(TypeError)
        expect(() => Random.arrayElements(undefined)).to.throw(TypeError)
        expect(() => Random.arrayElements([], 2)).to.throw(TypeError)
        expect(() => Random.arrayElements(words, 2, 3)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - date()`, (done) => {
        assert.throws(() => Random.date(interval1), TypeError)
        assert.throws(() => Random.date(interval2), TypeError)
        assert.throws(() => Random.date(true), TypeError)
        assert.throws(() => Random.date(null), TypeError)
        assert.throws(() => Random.date(undefined), TypeError)
        assert.throws(() => Random.date([]), TypeError)
        assert.throws(() => Random.date(words), TypeError)
        expect(() => Random.date(false)).to.throw(TypeError)
        expect(() => Random.date(interval1)).to.throw(TypeError)
        expect(() => Random.date(interval2)).to.throw(TypeError)
        expect(() => Random.date(null)).to.throw(TypeError)
        expect(() => Random.date(undefined)).to.throw(TypeError)
        expect(() => Random.date([])).to.throw(TypeError)
        expect(() => Random.date(words)).to.throw(TypeError)
        done()
    })
})