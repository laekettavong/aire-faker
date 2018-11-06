/* eslint-env mocha */
import { assert, expect } from 'chai'
import Address from '../lib/model/Address'

describe('Faker.Address', () => {
    let counter = 0

    it(`(${++counter}) Returns a string`, (done) => {
        assert.isString(Address.address())
        assert.isString(Address.state())
        assert.isString(Address.stateAbbrev())
        assert.isString(Address.city())
        assert.isString(Address.toString())
        expect(Address.address()).to.be.a('string')
        expect(Address.state()).to.be.a('string')
        expect(Address.stateAbbrev()).to.be.a('string')
        expect(Address.city()).to.be.a('string')
        expect(Address.toString()).to.be.a('string')
        done()
    })

    it(`(${++counter}) Returns a number`, (done) => {
        assert.isNumber(Address.zip())
        expect(Address.zip()).to.be.a('number')
        done()
    })

    it(`(${++counter}) Returns a literal object`, (done) => {
        assert.isObject(Address.toJSON())
        expect(Address.toJSON()).to.be.a('object')
        done()
    })

    it(`(${++counter}) Contains valid values`, (done) => {
        assert.isAbove(Address.address().length, 0)
        assert.isAbove(Address.state().length, 0)
        assert.isAbove(Address.stateAbbrev().length, 0)
        assert.isAbove(Address.city().length, 0)
        assert.isAbove(Address.zip(), 9999)
        assert.isBelow(Address.zip(), 100000)
        assert.isNotEmpty(Address.toJSON())
        done()
    })

    it(`(${++counter}) Has properties`, (done) => {
        assert.property(Address.toJSON(), 'street')
        assert.property(Address.toJSON(), 'city')
        assert.property(Address.toJSON(), 'state')
        assert.property(Address.toJSON(), 'zip')
        assert.property(Address.toJSON(), 'locale')
        assert.hasAllKeys(Address.toJSON(), ['street', 'city', 'state', 'zip', 'locale'])
        done()
    })

    it(`(${++counter}) Does not throw any errors`, (done) => {
        assert.doesNotThrow(() => Address.address(), Error)
        assert.doesNotThrow(() => Address.state(), Error)
        assert.doesNotThrow(() => Address.stateAbbrev(), Error)
        assert.doesNotThrow(() => Address.city(), Error)
        assert.doesNotThrow(() => Address.zip(), Error)
        assert.doesNotThrow(() => Address.toString(), Error)
        assert.doesNotThrow(() => Address.toJSON(), Error)
        done()
    })
})