const Random = require('../utilities/Random')
const Validate = require('../utilities/Validate')
const AireDate = require('../utilities/Date')
const Email = require('./Email')
const name = require('../data/names')
const avatar = require('../data/avatars')
const {
    sex,
    dateIntervals,
    dateOptions,
    sexTypes
} = require('../data/constants')

class Person {

    /**
     * Generates random full name (first and last) of a person based on the optional gender param
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional gender - number that maps to the two genders
     * @return {string} person's full name
     * @example
     * 
     * faker.person.fullname([gender])
     * // -> 'Brian Coleman'
     * 
     */
    static fullName(gender) {
        gender = gender || Random.arrayElement(sex)
        return `${Person.firstName(Validate.gender(gender))} ${Person.lastName()}`
    }

    /**
     * Generates random first name of a person based on the optional gender param
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional gender - number that maps to the two genders
     * @return {string} person's first name
     * @example
     * 
     * faker.person.firstName([gender])
     * // -> 'Daniel'
     * 
     */
    static firstName(gender) {
        gender = gender || Random.arrayElement(sex)
        if (Validate.gender(gender) === 0) return Person.maleName()
        return Person.femaleName()
    }

    /**
     * Generates random middle name of a person based on the optional gender param
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional gender - number that maps to the two genders
     * @return {string} person's middle name
     * @example
     * 
     * faker.person.middleName([gender])
     * // -> 'Steve'
     * 
     */
    static middleName(gender) {
        gender = gender || Random.arrayElement(sex)
        if (Validate.gender(gender) === 0) return Person.maleName()
        return Person.femaleName()
    }

    /**
     * Generates a random male name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} a male name
     * @example
     * 
     * faker.person.maleName([gender])
     * // -> 'Travis'
     * 
     */
    static maleName() {
        return Random.arrayElement(name.males)
    }

    /**
     * Generates a random female name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} a female name
     * @example
     * 
     * faker.person.femaleName()
     * // -> 'Kathryn'
     * 
     */
    static femaleName() {
        return Random.arrayElement(name.females)
    }

    /**
     * Generates a random last name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} a last name
     * @example
     * 
     * faker.person.lastName()
     * // -> 'Peterson'
     * 
     */
    static lastName() {
        return Random.arrayElement(name.last)
    }

    /**
     * Generates random user avatar URL based on the optional gender param
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional gender - number that maps to the two genders
     * @return {string} user avatar URL
     * @example
     * 
     * faker.person.avatar([gender])
     * // -> 'https://s3.amazonaws.com/uifaces/faces/twitter/travishines/128.jpg'
     * 
     */
    static avatar(gender) {
        gender = gender || Random.arrayElement(sex)
        if (Validate.gender(gender) === 0) return Person.maleAvatar()
        return Person.femaleAvatar()
    }

    /**
     * Generates random male user avatar URL
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} male user avatar URL
     * @example
     * 
     * faker.person.maleAvatar()
     * // -> 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosgavina/128.jpg'
     * 
     */
    static maleAvatar() {
        return `${avatar.baseUrl}/${Random.arrayElement(avatar.males)}/${avatar.sizeJpg128}`
    }

    /**
     * Generates random female user avatar URL
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} female user avatar URL
     * @example
     * 
     * faker.person.femaleAvatar()
     * // -> 'https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg'
     * 
     */
    static femaleAvatar() {
        return `${avatar.baseUrl}/${Random.arrayElement(avatar.females)}/${avatar.sizeJpg128}`
    }

    /**
     * Generates random personal email address based on the optional gender param
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {number} optional gender - number that maps to the two genders
     * @return {string} personal email address
     * @example
     * 
     * faker.person.email([gender])
     * // -> 'brandon.lewis@juno.com'
     * 
     */
    static email(gender) {
        return Email.person(gender)
    }

    /**
     * Generates random phone number
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} personal phone number
     * @example
     * 
     * faker.person.phone()
     * // -> '(812) 945-9225'
     * 
     */
    static phone() {
        return Random.phone()
    }

    /**
     * Generates random marital status of a person
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} marital status
     * @example
     * 
     * faker.person.status()
     * // -> 'single'
     * 
     */
    static status() {
        return Random.arrayElement(name.status)
    }

    /**
     * Generates random literal object with birthday and age of a person
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} optional interval literal object to denote birthday should fall between startDate and endDate
     * @param {object} optional options literal object with date formatting properties and the desired locale code
     * @return {object} JSON with birthday and age of a person
     * @example
     * 
     * faker.person.dob([interval], [options])
     * // ->
     * { 
     *   dob: 'Mar 28, 1977', 
     *   age: 41 
     * }
     * 
     */
    static dob(interval, options) {
        interval = interval || dateIntervals.dob
        options = options || dateOptions.enUs
        const { locale } = options
        Validate.locale(locale)
        const dob = Random.date(interval)
        const age = AireDate.calculateAge(dob)
        return { dob: dob.toLocaleDateString(locale, options), age }
    }

    /**
     * Generates random literal object with peronsal info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} optional options literal object specify the type of info to include
     * @return {object} JSON with personal info
     * @example
     * 
     * 
     * // birthday should fall between these two dates
     * const dobInterval= { startDate: new Date(1960, 0, 1), endDate: new Date(1980, 0, 1) } 
     * 
     * // include the person's education history and the desired number of colleges the person attended
     * const education = { include: true, count: 1 }
     * 
     * // include the perso'sn employment history and the desired number of companies the person worked at
     * const employment = { include: true, count: 2 }
     * 
     * // include blogs the person has authored and the desired number of blogs the person has written
     * const blog = { include: true, count: 2 }
     * 
     * // include comments the person has authored and the desired number of comments the person has written
     * const comment = { include: true, count: 3 }
     * 
     * // gender: 
     * //    0 -> males
     * //    1 -> female
     * const gender = 0
     * const address = true
     * 
     * const options = { gender, dobInterval, address, education, employment, blog, comment }
     * 
     * 
     * faker.person.toJSON([options])
     * // ->
     * following is a sample result if no options were passed in
     * 
     * {
     *   firstName: 'Peter',
     *   middleName: 'Allen',
     *   lastName: 'Price',
     *   phone: '(119) 287-6721',
     *   email: 'peter.price@gmail.us',
     *   dob: 'Jan 5, 1966',
     *   age: 52,
     *   gender: 'male',
     *   status: 'married',
     *   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
     * }
     * 
     */
    static toJSON(options) {
        options = options || { gender: Random.arrayElement(sex), dobInterval: dateIntervals.dob }
        const type = options.gender || Random.arrayElement(sex)
        Validate.gender(type)
        const interval = options.dobInterval || dateIntervals.dob
        Validate.interval(interval)
        const firstName = Person.firstName(type)
        const middleName = Person.middleName(type)
        const lastName = Person.lastName()
        const phone = Person.phone()
        const email = Person.email()
        const avatar = Person.avatar(type)
        const status = Person.status()
        const { dob, age } = Person.dob(interval)
        const gender = sexTypes[type]
        return { firstName, middleName, lastName, phone, email, dob, age, gender, status, avatar }
    }
}

module.exports = Person