/* eslint-env mocha */
import { assert, expect } from 'chai'
import Faker from '../lib/model/Faker'
import Faker2 from '../lib/model/Faker'

describe('Faker.Faker', () => {
    let counter = 0

    it(`(${++counter}) Returns valid objects`, (done) => {
        assert.isNotNull(Faker.credential)
        assert.isNotNull(Faker.person)
        assert.isNotNull(Faker.address)
        assert.isNotNull(Faker.lorem)
        assert.isNotNull(Faker.college)
        assert.isNotNull(Faker.company)
        assert.isNotNull(Faker.blog)
        assert.isNotNull(Faker.comment)
        done()
    })

    it(`(${++counter}) Is typeof function`, (done) => {
        expect(Faker.credential).to.be.a('function')
        expect(Faker.person).to.be.a('function')
        expect(Faker.address).to.be.a('function')
        expect(Faker.lorem).to.be.a('function')
        expect(Faker.college).to.be.a('function')
        expect(Faker.company).to.be.a('function')
        expect(Faker.blog).to.be.a('function')
        expect(Faker.comment).to.be.a('function')
        done()
    })

    it(`(${++counter}) Singleton, is the same reference`, (done) => {
        assert.equal(Faker, Faker2)
        assert.strictEqual(Faker, Faker2)
        expect(Faker).to.be.equal(Faker2)
        done()
    })

    it(`(${++counter}) Should not be able to instantiate, throws 'TypeError'`, (done) => {
        assert.throws(() => new Faker(), TypeError)
        expect(() => new Faker()).to.throw(TypeError)
        done()
    })
})