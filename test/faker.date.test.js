/* eslint-env mocha */
import { assert, expect } from 'chai'
import AireDate from '../lib/utilities/Date'


describe('Faker.AireDate', () => {
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

    it(`(${++counter}) Returns valid date - randomDate()`, (done) => {
        assert.isNotNull(AireDate.randomDate(dob))
        assert.instanceOf(AireDate.randomDate(dob), Date)
        done()
    })

    it(`(${++counter}) Returns valid date - calculateAge()`, (done) => {
        assert.isNotNull(AireDate.calculateAge(date1))
        assert.isAbove(AireDate.calculateAge(date1), 0)
        expect(AireDate.calculateAge(date1)).to.be.a('number')
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - randomDate()`, (done) => {
        assert.throws(() => AireDate.randomDate(interval1), TypeError)
        assert.throws(() => AireDate.randomDate(interval2), TypeError)
        assert.throws(() => AireDate.randomDate({}), TypeError)
        assert.throws(() => AireDate.randomDate([]), TypeError)
        assert.throws(() => AireDate.randomDate(1990), TypeError)
        assert.throws(() => AireDate.randomDate('1990'), TypeError)
        assert.throws(() => AireDate.randomDate(null), TypeError)
        assert.throws(() => AireDate.randomDate(undefined), TypeError)
        expect(() => AireDate.randomDate(interval1)).to.throw(TypeError)
        expect(() => AireDate.randomDate(interval2)).to.throw(TypeError)
        expect(() => AireDate.randomDate({})).to.throw(TypeError)
        expect(() => AireDate.randomDate(null)).to.throw(TypeError)
        expect(() => AireDate.randomDate(undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - calculateAge()`, (done) => {
        assert.throws(() => AireDate.calculateAge(null), TypeError)
        assert.throws(() => AireDate.calculateAge(undefined), TypeError)
        assert.throws(() => AireDate.calculateAge(dob), TypeError)
        assert.throws(() => AireDate.calculateAge(1990), TypeError)
        assert.throws(() => AireDate.calculateAge('1990'), TypeError)
        expect(() => AireDate.calculateAge(null)).to.throw(TypeError)
        expect(() => AireDate.calculateAge(undefined)).to.throw(TypeError)
        expect(() => AireDate.calculateAge(dob)).to.throw(TypeError)
        expect(() => AireDate.calculateAge({})).to.throw(TypeError)
        expect(() => AireDate.calculateAge([])).to.throw(TypeError)
        expect(() => AireDate.calculateAge(1990)).to.throw(TypeError)
        expect(() => AireDate.calculateAge('1990')).to.throw(TypeError)
        done()
    })
})