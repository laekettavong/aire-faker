/* eslint-env mocha */
import { assert, expect } from 'chai'
import Email from '../lib/model/Email'

describe('Faker.Email', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Email.person())
        assert.isString(Email.person(0))
        assert.isString(Email.person(1))
        assert.isString(Email.college())
        assert.isString(Email.company())
        assert.isNotNull(Email.person())
        assert.isNotNull(Email.company())
        assert.isAbove(Email.person(0).length, 0)
        assert.isAbove(Email.person(1).length, 0)
        assert.isAbove(Email.college().length, 0)
        assert.isAbove(Email.company().length, 0)
        expect(Email.person()).to.be.a('string')
        expect(Email.person(0)).to.be.a('string')
        expect(Email.person(1)).to.be.a('string')
        expect(Email.college()).to.be.a('string')
        expect(Email.company()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - person()`, (done) => {
        assert.throws(() => Email.person([]), TypeError)
        assert.throws(() => Email.person({}), TypeError)
        assert.throws(() => Email.person(Symbol(1)), TypeError)
        assert.throws(() => Email.person(new Date), TypeError)
        assert.throws(() => Email.person(true), TypeError)
        assert.throws(() => Email.person(-1), TypeError)
        assert.throws(() => Email.person(2), TypeError)
        expect(() => Email.person(-2)).to.throw(TypeError)
        expect(() => Email.person(3)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Email.person(), Error)
        assert.doesNotThrow(() => Email.person(0), Error)
        assert.doesNotThrow(() => Email.person(1), Error)
        assert.doesNotThrow(() => Email.college(), Error)
        assert.doesNotThrow(() => Email.college(1), Error)
        assert.doesNotThrow(() => Email.college('hello'), Error)
        assert.doesNotThrow(() => Email.college(true), Error)
        assert.doesNotThrow(() => Email.college({}), Error)
        assert.doesNotThrow(() => Email.company(), Error)
        assert.doesNotThrow(() => Email.company(1), Error)
        assert.doesNotThrow(() => Email.company('hello'), Error)
        assert.doesNotThrow(() => Email.company(true), Error)
        assert.doesNotThrow(() => Email.company({}), Error)
        done()
    })

})