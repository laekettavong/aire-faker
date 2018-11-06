const Random = require('../utilities/Random')
const Validate = require('../utilities/Validate')
const Address = require('./Address')
const Lorem = require('./Lorem')
const Email = require('./Email')
const university = require('../data/colleges')
const { dateIntervals, dateOptions } = require('../data/constants')


class College {

    /**
     * Generates a random fictitious college name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college name
     * @example
     * 
     * faker.college.name()
     * // -> 'Richards Medical College'
     * 
     */
    static name() {
        return Random.arrayElement(university.names)
    }

    /**
     * Generates a random abbreviation of a fictitious college
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college name
     * @example
     * 
     * faker.college.abbrev()
     * // -> 'CSU'
     * 
     */
    static abbrev() {
        return Random.arrayElement(university.abbrevs)
    }

    /**
     * Generates a random 'Lorem' string to present colleg description
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college description
     * @example
     * 
     * faker.college.description()
     * // -> 'Suspendisse vel urna nec sapien tempor ultricies rhoncus commodo magna eu pretium...'
     * 
     */
    static description() {
        return Lorem.long(1)
    }

    /**
     * Generates a random the college type: public/private
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college type
     * @example
     * 
     * faker.college.type()
     * // -> 'public'
     * 
     */
    static type() {
        return Random.arrayElement(university.types)
    }

    /**
     * Generates a random year to represent college founded year
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {number} year college was founded
     * @example
     * 
     * faker.college.founded()
     * // -> 1963
     * 
     */
    static founded() {
        return Random.date(dateIntervals.collegeFounded).getFullYear()
    }

    /**
     * Generates a random JSON representation of college address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} address JSON
     * @example
     * 
     * faker.college.address()
     * // ->
     * { street: '6529 Lake Street',
     *   city: 'Clinton',
     *   state: 'Tennessee',
     *   zip: 95236,
     *   locale: 'Clinton, Tennessee 95236' 
     * }
     * 
     */
    static address() {
        return Address.toJSON()
    }

    /**
     * Generates a random college email address 
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college email address
     * @example
     * 
     * faker.college.email()
     * // -> 'contact@hvc.edu'
     * 
     */
    static email() {
        return Email.college()
    }

    /**
     * Generates a random college phone number
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college phone number
     * @example
     * 
     * faker.college.phone()
     * // -> '(812) 539-8143'
     * 
     */
    static phone() {
        return Random.phone()
    }

    /**
     * Generates a random college major
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college major
     * @example
     * 
     * faker.college.major()
     * // -> 'Nuclear Engineering''
     * 
     */
    static major(count) {
        count = count || 1
        Validate.number(count)
        return Random.arrayElements(university.majors, count, ' ')
    }

    /**
     * Generates a random college degree
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} college degree
     * @example
     * 
     * faker.college.degree()
     * // -> 'Bachelor\'s Degree'
     * 
     */
    static degree(count) {
        count = count || 1
        Validate.number(count)
        return Random.arrayElements(university.degrees, count, ' ')
    }

    /**
     * Generates a random literal object that contains enrollment duration and graduation date
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} college enrollment JSON
     * @example
     * 
     * faker.college.enrolled()
     * // ->
     * { 
     *   startDate: 'Sep 1, 2008',
     *   endDate: 'May 17, 2012',
     *   gradDate: 'May 25, 2012' 
     * }
     */
    static enrolled(interval, options) {
        interval = interval || dateIntervals.collegeEnrollment
        options = options || dateOptions.enUs
        const { yearsEnrolled } = interval
        const { locale, startMonth, startDate, endMonth, endDate, gradMonth, gradDate } = options
        const date = Random.date(interval)
        const start = new Date(date.getFullYear(), startMonth, startDate).toLocaleDateString(locale, options)
        const end = new Date(date.getFullYear() + yearsEnrolled, endMonth, endDate).toLocaleDateString(locale, options)
        const grad = new Date(date.getFullYear() + yearsEnrolled, gradMonth, gradDate).toLocaleDateString(locale, options)
        return { startDate: start, endDate: end, gradDate: grad }
    }

    /**
     * Generates a random literal object with college and student info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} college student JSON
     * @example
     * 
     * faker.college.studentJSON()
     * // ->
     * { 
     *   name: 'Northern State Univerity',
     *   description: 'Sed sed tincidunt odio, vel rutrum ex...
     *               .
     *               .
     *               .
     *   founded: 1951,
     *   type: 'public',
     *   email: 'contact@hsu.edu',
     *   phone: '(684) 135-9235',
     *   address:
     *      { 
     *         street: '5631 Aspen Court',
     *         city: 'Livonia',
     *         state: 'Lousiana',
     *         zip: 99288,
     *         locale: 'Livonia, Lousiana 99288' 
     *      },
     *   dates:
     *      { 
     *         startDate: 'Sep 1, 2008',
     *         endDate: 'May 17, 2012',
     *         gradDate: 'May 25, 2012' 
     *      },
     *   degree: 'Master\'s Degree',
     *   major: 'Rehabilitation Services' 
     * }
     * 
     */
    static studentJSON() {
        const name = College.name()
        const description = College.description()
        const founded = College.founded()
        const type = College.type()
        const email = College.email()
        const phone = College.phone()
        const { startDate, endDate, gradDate } = College.enrolled()
        const major = College.major()
        const degree = College.degree()
        const address = {}
        const dates = {}
        Object.assign(address, College.address())
        Object.assign(dates, { startDate, endDate, gradDate })
        return { name, description, founded, type, email, phone, address, dates, degree, major }
    }

    /**
     * Generates a random literal object with college info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} college info JSON
     * @example
     * 
     * faker.college.collegeJSON()
     * // ->
     * { name: 'Raft College',
     *   description: 'Donec tempor justo id nulla eleifend, ut blandit sem venenatis...
     *               .
     *               .
     *               .
     *   founded: 1897,
     *   type: 'public',
     *   email: 'contact@su.edu',
     *   phone: '(277) 682-9786',
     *   address:
     *      { 
     *         street: '6618 Lake Avenue',
     *         city: 'Washington',
     *         state: 'Florida',
     *         zip: 14117,
     *         locale: 'Washington, Florida 14117' 
     *      } 
     * }
     * 
     */
    static collegeJSON() {
        const name = College.name()
        const description = College.description()
        const founded = College.founded()
        const type = College.type()
        const email = College.email()
        const phone = College.phone()
        const address = {}
        Object.assign(address, College.address())
        return { name, description, founded, type, email, phone, address }
    }
}

module.exports = College