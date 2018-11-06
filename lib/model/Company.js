const Random = require('../utilities/Random')
const Address = require('./Address')
const Lorem = require('./Lorem')
const Email = require('./Email')
const { dateIntervals, dateOptions, loremCount } = require('../data/constants')
const corporation = require('../data/companies')



class Company {

    /**
     * Generates a random fictitious company name
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company name
     * @example
     * 
     * faker.company.name()
     * // -> 'GameCenter CX'
     * 
     */
    static name() {
        return Random.arrayElement(corporation.names)
    }

    /**
     * Generates a random industry the company belongs to
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company industry
     * @example
     * 
     * faker.company.industry()
     * // -> 'Pharmaceutical'
     * 
     */
    static industry() {
        return Random.arrayElement(corporation.industries)
    }

    /**
     * Generates a random 'Lorem' string to represent company description/about
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company description
     * @example
     * 
     * faker.company.description()
     * // -> 'Donec sed vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et...'
     * 
     */
    static description() {
        return Lorem.long(1)
    }

    /**
     * Generates a random year to represent year college was founded
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {number} year company founded
     * @example
     * 
     * faker.company.founded()
     * // -> 1973
     * 
     */
    static founded() {
        return Random.date(dateIntervals.companyFounded).getFullYear()
    }

    /**
     * Generates a random fictitious company email address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company email address
     * @example
     * 
     * faker.company.email()
     * // -> 'info@adiposeindustries.com'
     * 
     */
    static email() {
        return Email.company()
    }

    /**
     * Generates a random fictitious company phone number
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} company phone number
     * @example
     * 
     * faker.company.phone()
     * // -> '(132) 432-8464'
     * 
     */
    static phone() {
        return Random.phone()
    }

    /**
     * Generates a JSON representation of a typical US address
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} address JSON
     * @example
     * 
     * faker.company.address()
     * // -> 
     * {
     *   street: '8163 Main Road',
     *   city: 'Georgetown',
     *   state: 'Mississippi',
     *   zip: 15197,
     *   locale: 'Georgetown, Mississippi 15197'
     * }
     * 
     */
    static address() {
        return Address.toJSON()
    }

    /**
     * Generates a random employee job title
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} employee job title
     * @example
     * 
     * faker.company.title()
     * // -> 'Lead Manufacturing Engineer'
     * 
     */
    static title() {
        return `${Random.arrayElement(corporation.ranks)} ${Random.arrayElement(corporation.titles)}`
    }

    /**
     * Generates a random department within the company
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} department in the company
     * @example
     * 
     * faker.company.title()
     * // -> 'Web Infrastucture'
     * 
     */
    static department() {
        return Random.arrayElement(corporation.departments)
    }

    /**
     * Generates a random 'Lorem' string to represent duties of an employee
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {string} list of emplyee duties
     * @example
     * 
     * faker.company.duties()
     * // -> 'Donec consectetur metus vitae pretium ullamcorper...'
     * 
     */
    static duties(count) {
        count = count || loremCount
        return Lorem.lists(count, ' ')
    }

    /**
     * Generates a random literal object with employee start and end dates
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} JSON with employee start and end dates
     * @example
     * 
     * faker.company.duration()
     * // ->
     * { 
     *   startDate: 'Sep 1, 2015', 
     *   endDate: 'May 17, 2022' 
     * }
     * 
     */
    static duration(interval, options) {
        interval = interval || dateIntervals.workHistory
        options = options || dateOptions.enUs
        const { yearsWorked } = interval
        const { locale, startMonth, startDate, endMonth, endDate } = options
        const date = Random.date(interval)
        const start = new Date(date.getFullYear(), startMonth, startDate).toLocaleDateString(locale, options)
        const end = new Date(date.getFullYear() + yearsWorked, endMonth, endDate).toLocaleDateString(locale, options)
        return { startDate: start, endDate: end }
    }

    /**
     * Generates a random literal object with company info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} JSON with company info
     * @example
     * 
     * faker.company.companyJSON()
     * // ->
     * {
     *   name: 'Power Broker',
     *   industry: 'Chemical',
     *   description: 'Donec sed vestibulum mi. Pellentesque habitant morbi tristique...
     *               .
     *               .
     *               .
     *   started: 1946,
     *   email: 'info@contoso.com'
     *   phone: '(458) 987-1714',
     *   address:
     *   {
     *      street: '1474 Washington Court',
     *      city: 'Milton',
     *      state: 'Vermont',
     *      zip: 58439,
     *      locale: 'Milton, Vermont 58439'
     *   }
     * }
     * 
     */
    static companyJSON() {
        const name = Company.name()
        const industry = Company.industry()
        const description = Company.description()
        const started = Company.founded()
        const email = Company.email()
        const phone = Company.phone()
        const address = {}
        Object.assign(address, Company.address())
        return { name, industry, description, started, email, phone, address }
    }

    /**
     * Generates a random literal object with company and employee info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @return {object} JSON with company and employee info
     * @example
     * 
     * faker.company.employeeJSON()
     * // ->
     * {
     *   name: 'Cross Technological Enterprises',
     *   description: 'Etiam interdum laoreet nibh nec vehicula...
     *               .
     *               .
     *               .
     *   department: 'Engineering',
     *   title: ' Administrative Manager',
     *   duties: 'Donec tincidunt dolor nec ullamcorper finibus. Morbi egestas purus ac erat...,
     *   dates: { startDate: 'Sep 1, 2018', endDate: 'May 17, 2025' }
     *  }
     * 
     */
    static employeeJSON() {
        const name = Company.name()
        const description = Company.description()
        const department = Company.department()
        const title = Company.title()
        const duties = Company.duties()
        const dates = {}
        const { startDate, endDate } = Company.duration()
        Object.assign(dates, { startDate, endDate })
        return { name, description, department, title, duties, dates }
    }
}

module.exports = Company