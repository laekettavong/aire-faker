/* eslint-env mocha */
import { assert, expect } from 'chai'
import Credential from '../lib/model/Credential'

describe('Faker.Credential', () => {
    let counter = 0
    let personInfo
    let options
    let interval
    let education
    let employment
    let blog
    let comment

    beforeEach((done) => {
        personInfo = {}
        interval = { startDate: new Date(1960, 0, 1), endDate: new Date(1980, 0, 1) }
        education = { include: true, count: 2 }
        employment = { include: true, count: 2 }
        blog = { include: true, count: 2 }
        comment = { include: true, count: 3 }
        options = { gender: 0, dobInterval: interval, address: true, education, employment, blog, comment }
        done()
    })

    after((done) => {
        personInfo = undefined
        interval = undefined
        education = undefined
        employment = undefined
        blog = undefined
        comment = undefined
        options = undefined
        done()
    })

    it(`(${++counter}) Returns valid results - person()`, (done) => {
        assert.isNotNull(Credential.person(options))
        assert.isNotNull(Credential.person())
        assert.isNotNull(Credential.person(null))
        assert.isNotNull(Credential.person(undefined))
        assert.isObject(Credential.person(options))
        assert.isObject(Credential.person())
        assert.isObject(Credential.person(null))
        assert.isObject(Credential.person(undefined))
        expect(Credential.person(options)).to.be.a('object')
        done()
    })

    it(`(${++counter}) Returns valid results - constructInfo()`, (done) => {
        assert.hasAllKeys(Credential.constructInfo(options, personInfo), ['firstName', 'middleName', 'lastName', 'phone', 'email', 'dob', 'age', 'gender', 'status', 'avatar'])
        done()
    })

    it(`(${++counter}) Returns valid results - constructAddress()`, (done) => {
        personInfo.address = {}
        assert.hasAllKeys(Credential.constructAddress(true, options, personInfo).address, ['street', 'city', 'state', 'zip', 'locale'])
        done()
    })

    it(`(${++counter}) Returns valid results - constructEducation()`, (done) => {
        assert.hasAllKeys(Credential.constructEducation(true, options, personInfo).education[0], ['name', 'description', 'founded', 'type', 'email', 'phone', 'address', 'dates', 'degree', 'major'])
        done()
    })

    it(`(${++counter}) Returns valid results - constructEmployment()`, (done) => {
        assert.hasAllKeys(Credential.constructEmployment(true, options, personInfo).employment[0], ['name', 'description', 'department', 'title', 'duties', 'dates'])
        done()
    })

    it(`(${++counter}) Returns valid results - constructBlog()`, (done) => {
        assert.hasAllKeys(Credential.constructBlog(true, options, personInfo).blogs[0], ['author', 'created', 'title', 'body', 'likes', 'comments'])
        done()
    })

    it(`(${++counter}) Returns valid results - constructComment()`, (done) => {
        assert.hasAllKeys(Credential.constructComment(true, options, personInfo).comments[0], ['author', 'date', 'likes', 'message'])
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - person()`, (done) => {
        assert.throws(() => Credential.person({ address: 'true' }), TypeError)
        expect(() => Credential.person({ address: 1 })).to.throw(TypeError)
        expect(() => Credential.person({ employment: { include: [true] } })).to.throw(TypeError)
        expect(() => Credential.person({ blog: { include: Symbol(true) } })).to.throw(TypeError)
        expect(() => Credential.person({ comment: { include: null } })).to.throw(TypeError)
        expect(() => Credential.person({ comment: { include: undefined } })).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructInfo()`, (done) => {
        assert.throws(() => Credential.constructInfo(null, personInfo), TypeError)
        assert.throws(() => Credential.constructInfo(undefined, personInfo), TypeError)
        expect(() => Credential.constructInfo(null, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructInfo(undefined, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructInfo(options)).to.throw(TypeError)
        expect(() => Credential.constructInfo(options, null)).to.throw(TypeError)
        expect(() => Credential.constructInfo(options, undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructAddress()`, (done) => {
        assert.throws(() => Credential.constructAddress('true', personInfo), TypeError)
        expect(() => Credential.constructAddress(1, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructAddress(true)).to.throw(TypeError)
        expect(() => Credential.constructAddress(true, null)).to.throw(TypeError)
        expect(() => Credential.constructAddress(true, undefined)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructEducation()`, (done) => {
        assert.throws(() => Credential.constructEducation('true', null, personInfo), TypeError)
        expect(() => Credential.constructEducation(1, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructEducation(1, null, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructEducation(true, { college: { count: '2' } }, personInfo)).to.throw(TypeError)
        expect(() => Credential.coconstructEducation(true, options, null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructEmployment()`, (done) => {
        assert.throws(() => Credential.constructEmployment('true', null, personInfo), TypeError)
        expect(() => Credential.constructEmployment(1, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructEmployment(true, null, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructEmployment(true, { college: { count: '2' } }, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructEmployment(true, options, null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructBlog()`, (done) => {
        assert.throws(() => Credential.constructBlog('true', null, personInfo), TypeError)
        expect(() => Credential.constructBlog(1, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructBlog(true, null, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructBlog(true, { college: { count: '2' } }, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructBlog(true, options, null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - constructComment()`, (done) => {
        assert.throws(() => Credential.constructComment('true', null, personInfo), TypeError)
        expect(() => Credential.constructComment(1, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructComment(true, null, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructComment(true, { college: { count: '2' } }, personInfo)).to.throw(TypeError)
        expect(() => Credential.constructComment(true, options, null)).to.throw(TypeError)
        done()
    })

    it(`(${++counter}) Throws 'TypeError' - validateArgs()`, (done) => {
        assert.throws(() => Credential.validateArgs('true', options, personInfo), TypeError)
        expect(() => Credential.validateArgs(1, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.validateArgs(null, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.validateArgs(undefined, options, personInfo)).to.throw(TypeError)
        expect(() => Credential.validateArgs(true, null, personInfo)).to.throw(TypeError)
        expect(() => Credential.validateArgs(true, undefined, personInfo)).to.throw(TypeError)
        expect(() => Credential.validateArgs(true, options, null)).to.throw(TypeError)
        expect(() => Credential.validateArgs(true, options, undefined)).to.throw(TypeError)
        done()
    })
})