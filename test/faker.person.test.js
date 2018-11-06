/* eslint-env mocha */
import { assert, expect } from 'chai'
import Person from '../lib/model/Person'

describe('Faker.Person', () => {
    let counter = 0
    let dob = {}
    let options = {}
    let startDate

    before((done) => {
        dob = { startDate: new Date(1980, 0, 1), endDate: new Date(1990, 0, 1) }
        options = { gender: 0, locale: 'en-US', dobInterval: dob }
        startDate = new Date(1990, 0, 1)
        done()
    })

    after((done) => {
        dob = undefined
        options = undefined
        startDate = undefined
        done()
    })

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Person.fullName())
        assert.isString(Person.firstName())
        assert.isString(Person.maleName())
        assert.isString(Person.femaleName())
        assert.isString(Person.lastName())
        assert.isString(Person.avatar())
        assert.isString(Person.maleAvatar())
        assert.isString(Person.femaleAvatar())
        assert.isString(Person.email())
        assert.isString(Person.phone())
        assert.isString(Person.status())
        expect(Person.fullName()).to.be.a('string')
        expect(Person.firstName()).to.be.a('string')
        expect(Person.maleName()).to.be.a('string')
        expect(Person.femaleName()).to.be.a('string')
        expect(Person.lastName()).to.be.a('string')
        expect(Person.avatar()).to.be.a('string')
        expect(Person.maleAvatar()).to.be.a('string')
        expect(Person.femaleAvatar()).to.be.a('string')
        expect(Person.email()).to.be.a('string')
        expect(Person.phone()).to.be.a('string')
        expect(Person.status()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Returns a literal object`, (done) => {
        assert.isObject(Person.dob(dob))
        assert.isObject(Person.toJSON(options))
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(Person.fullName().length, 0)
        assert.isAbove(Person.firstName().length, 0)
        assert.isAbove(Person.maleName().length, 0)
        assert.isAbove(Person.femaleName().length, 0)
        assert.isAbove(Person.lastName().length, 0)
        assert.isAbove(Person.avatar().length, 0)
        assert.isAbove(Person.maleAvatar().length, 0)
        assert.isAbove(Person.femaleAvatar().length, 0)
        assert.isAbove(Person.email().length, 0)
        assert.isAbove(Person.phone().length, 0)
        assert.isAbove(Person.status().length, 0)
        assert.isNotEmpty(Person.dob(dob))
        assert.isNotEmpty(Person.toJSON(options))
        done()
    })

    it(`(${++counter}) Has properties`, (done) => {
        assert.property(Person.dob(dob), 'dob')
        assert.property(Person.dob(dob), 'age')
        assert.property(Person.toJSON(options), 'firstName')
        assert.property(Person.toJSON(options), 'middleName')
        assert.property(Person.toJSON(options), 'lastName')
        assert.property(Person.toJSON(options), 'phone')
        assert.property(Person.toJSON(options), 'email')
        assert.property(Person.toJSON(options), 'phone')
        assert.property(Person.toJSON(options), 'email')
        assert.property(Person.toJSON(options), 'dob')
        assert.property(Person.toJSON(options), 'age')
        assert.property(Person.toJSON(options), 'gender')
        assert.property(Person.toJSON(options), 'status')
        assert.property(Person.toJSON(options), 'avatar')
        assert.hasAllKeys(Person.dob(dob), ['dob', 'age'])
        assert.hasAllKeys(Person.toJSON(options), ['firstName', 'middleName', 'lastName', 'phone', 'email', 'dob', 'age', 'gender', 'status', 'avatar'])
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Person.fullName(), Error)
        assert.doesNotThrow(() => Person.firstName(), Error)
        assert.doesNotThrow(() => Person.maleName(), Error)
        assert.doesNotThrow(() => Person.femaleName(), Error)
        assert.doesNotThrow(() => Person.lastName(), Error)
        assert.doesNotThrow(() => Person.avatar(), Error)
        assert.doesNotThrow(() => Person.maleAvatar(), Error)
        assert.doesNotThrow(() => Person.femaleAvatar(), Error)
        assert.doesNotThrow(() => Person.email(), Error)
        assert.doesNotThrow(() => Person.phone(), Error)
        assert.doesNotThrow(() => Person.status(), Error)
        assert.doesNotThrow(() => Person.dob(dob), Error)
        assert.doesNotThrow(() => Person.toJSON(options), Error)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - fullName()`, (done) => {
        assert.throws(() => Person.fullName(true), TypeError)
        expect(() => Person.fullName(-1)).to.throw(TypeError)
        expect(() => Person.fullName(2)).to.throw(TypeError)
        expect(() => Person.fullName('1')).to.throw(TypeError)
        expect(() => Person.fullName([])).to.throw(TypeError)
        expect(() => Person.fullName({})).to.throw(TypeError)
        expect(() => Person.fullName(new Date())).to.throw(TypeError)
        expect(() => Person.fullName(Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - firstName()`, (done) => {
        assert.throws(() => Person.firstName(true), TypeError)
        expect(() => Person.firstName(-1)).to.throw(TypeError)
        expect(() => Person.firstName(2)).to.throw(TypeError)
        expect(() => Person.firstName('1')).to.throw(TypeError)
        expect(() => Person.firstName([])).to.throw(TypeError)
        expect(() => Person.firstName({})).to.throw(TypeError)
        expect(() => Person.firstName(new Date())).to.throw(TypeError)
        expect(() => Person.firstName(Symbol())).to.throw(TypeError)
        done()
    })


    it(`(${++counter}) Throws 'TypeError' - middleName()`, (done) => {
        assert.throws(() => Person.middleName(true), TypeError)
        expect(() => Person.middleName(-1)).to.throw(TypeError)
        expect(() => Person.middleName(2)).to.throw(TypeError)
        expect(() => Person.middleName('1')).to.throw(TypeError)
        expect(() => Person.middleName([])).to.throw(TypeError)
        expect(() => Person.middleName({})).to.throw(TypeError)
        expect(() => Person.middleName(new Date())).to.throw(TypeError)
        expect(() => Person.middleName(Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - avatar()`, (done) => {
        assert.throws(() => Person.avatar(true), TypeError)
        expect(() => Person.avatar(-1)).to.throw(TypeError)
        expect(() => Person.avatar(2)).to.throw(TypeError)
        expect(() => Person.avatar('1')).to.throw(TypeError)
        expect(() => Person.avatar([])).to.throw(TypeError)
        expect(() => Person.avatar({})).to.throw(TypeError)
        expect(() => Person.avatar(new Date())).to.throw(TypeError)
        expect(() => Person.avatar(Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - email()`, (done) => {
        assert.throws(() => Person.email(true), TypeError)
        expect(() => Person.email(-1)).to.throw(TypeError)
        expect(() => Person.email(2)).to.throw(TypeError)
        expect(() => Person.email('1')).to.throw(TypeError)
        expect(() => Person.email([])).to.throw(TypeError)
        expect(() => Person.email({})).to.throw(TypeError)
        expect(() => Person.email(new Date())).to.throw(TypeError)
        expect(() => Person.email(Symbol())).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - dob()`, (done) => {
        assert.throws(() => Person.dob({ startDate }, options), TypeError)
        expect(() => Person.dob({ startDate }, options)).to.throw(TypeError)
        expect(() => Person.dob(dob, { locale: 'abc' })).to.throw(TypeError)
        expect(() => Person.dob(dob, { locale: 123 })).to.throw(TypeError)
        expect(() => Person.dob(dob, {})).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - toJSON()`, (done) => {
        expect(() => Person.toJSON({ dobInterval: 'dob' })).to.throw(TypeError)
        expect(() => Person.toJSON({ gender: '1' })).to.throw(TypeError)
        expect(() => Person.toJSON({ gender: 'female', dobInterval: undefined })).to.throw(TypeError)
        done()
    })
})