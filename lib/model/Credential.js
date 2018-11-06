const { defaultOptions } = require('../data/constants')
const Validate = require('../utilities/Validate')
const Person = require('./Person')
const Address = require('./Address')
const College = require('./College')
const Company = require('./Company')
const Blog = require('./Blog')
const Comment = require('./Comment')

class Credential {

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
     * faker.credential.person([options])
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
    static person(options) {
        options = options || defaultOptions
        const { address, education, employment, blog, comment } = options
        const includeAddress = address ? Validate.boolean(address) : false
        const includeEducation = education ? Validate.boolean(education.include) : false
        const includeEmployment = employment ? Validate.boolean(employment.include) : false
        const includeBlog = blog ? Validate.boolean(blog.include) : false
        const includeComment = comment ? Validate.boolean(comment.include) : false
        let personInfo = {}
        Credential.constructInfo(options, personInfo)
        Credential.constructAddress(includeAddress, personInfo)
        Credential.constructEducation(includeEducation, options, personInfo)
        Credential.constructEmployment(includeEmployment, options, personInfo)
        Credential.constructBlog(includeBlog, options, personInfo)
        Credential.constructComment(includeComment, options, personInfo)
        return personInfo
    }

    /**
     * Generates random literal object with personal info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {object} options literal object specify the type of info to include
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
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
     * const employment = { include: true, count: 1 }
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
     * const personInfo = {}
     * 
     * faker.credential.constructInfo(options, personInfo)
     * // ->
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
    static constructInfo(options, personInfo) {
        Validate.nullOrUndefined(options)
        Object.assign(personInfo, Person.toJSON(options))
        return personInfo
    }

    /**
     * Generates random literal object with address info
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} includeAddress flag to include address or not
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
     * @example
     * 
     * 
     * const includeAddress = true
     * const personInfo = {}
     * 
     * faker.credential.constructInfo(includeAddress, personInfo)
     * // ->
     * { 
     *   address:
     *   { 
     *      street: '1416 Third Street',
     *      city: 'Jackson',
     *      state: 'Wisconsin',
     *      zip: 94634,
     *      locale: 'Jackson, Wisconsin 94634' 
     *   } 
     * }
     * 
     */
    static constructAddress(includeAddress, personInfo) {
        Validate.boolean(includeAddress)
        Validate.nullOrUndefined(personInfo)
        if (!includeAddress) return
        personInfo.address = Address.toJSON()
        return personInfo
    }

    /**
     * Generates random literal object with a person's education history
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} includeEducation flag to include education history or not
     * @param {object} options literal object specify the type of info to include
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
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
     * const employment = { include: true, count: 1 }
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
     * const includeEducation = true
     * const personInfo = {}
     * 
     * faker.credential.constructEducation(includeEducation, options, personInfo)
     * // ->
     * 
     * { 
     *   education:
     *   [ 
     *     { 
     *       name: 'Huxley State University',
     *       description: 'Nam condimentum tincidunt quam, non ornare turpis egestas commodo...',
     *       founded: 1939,
     *       type: 'public',
     *       email: 'contact@fit.edu',
     *       phone: '(528) 193-5992',
     *       address:
     *       {
     *         street: '9236 Main Boulevard',
     *         city: 'Greenville',
     *         state: 'Hawaii',
     *         zip: 65665,
     *         locale: 'Greenville, Hawaii 65665'
     *       },
     *       dates:
     *       {
     *         startDate: 'Sep 1, 2008',
     *         endDate: 'May 17, 2012',
     *         gradDate: 'May 25, 2012'
     *       },
     *       degree: 'Bachelor\'s Degree',
     *       major: 'Biobehavioral Health' 
     *     } 
     *   ] 
     * }
     * 
     */
    static constructEducation(includeEducation, options, personInfo) {
        Credential.validateArgs(includeEducation, options, personInfo)
        if (!includeEducation) return
        personInfo.education = []
        const { education } = options
        const count = education.count || 1
        Validate.number(count)
        let index = 0
        while (index++ < count) {
            personInfo.education.push(College.studentJSON())
        }
        return personInfo
    }

    /**
     * Generates random literal object with a person's employment history
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} includeEmployment flag to include employment or not
     * @param {object} options literal object specify the type of info to include
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
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
     * const employment = { include: true, count: 1 }
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
     * const includeEmployment = true
     * const personInfo = {}
     * 
     * faker.credential.constructEmployment(includeEmployment, options, personInfo)
     * // ->
     * 
     * { 
     *   employment:
     *     [ 
     *       {  
     *         name: 'Parker Industries',
     *         description: 'Donec vel euismod eros. Class aptent taciti sociosqu ad litora torquent per...',
     *         department: 'Security',
     *         title: 'Principle Product Design/Development Engineer',
     *         duties: 'Quisque eu lorem convallis, tincidunt ligula eu, aliquet dolor...',
     *         dates: 
     *         { 
     *           startDate: 'Sep 1, 2014', 
     *           endDate: 'May 17, 2021' 
     *         } 
     *       }
     *     ]
     * }
     * 
     */
    static constructEmployment(includeEmployment, options, personInfo) {
        Credential.validateArgs(includeEmployment, options, personInfo)
        if (!includeEmployment) return
        personInfo.employment = []
        const { employment } = options
        const count = employment.count || 1
        Validate.number(count)
        let index = 0
        while (index++ < count) {
            personInfo.employment.push(Company.employeeJSON())
        }
        return personInfo
    }

    /**
     * Generates random literal object with blogs written by a person
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} includeBlog flag to include blogs or not
     * @param {object} options literal object specify the type of info to include
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
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
     * const employment = { include: true, count: 1 }
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
     * const includeBlog = true
     * const personInfo = {}
     * 
     * faker.credential.constructBlog(includeBlog, options, personInfo)
     * // ->
     * 
     * { 
     *   blogs:
     *   [ 
     *     { 
     *       author: 'Jeremy Davis',
     *       created: 'Jul 9, 2018',
     *       title: 'Nunc faucibus sem at sollicitudin molestie.',
     *       body: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra...',
     *       likes: 217,
     *       comments:
     *       [ 
     *         {
     *           author: 'Adam Hayes',
     *           date: 'Jun 10, 2017',
     *           message: 'Fusce pretium viverra porta. Mauris sed facilisis arcu...',
     *           likes: 576
     *         }
     *       ]
     *     } 
     *   ] 
     * }
     * 
     */
    static constructBlog(includeBlog, options, personInfo) {
        Credential.validateArgs(includeBlog, options, personInfo)
        if (!includeBlog) return
        personInfo.blogs = []
        const { blog } = options
        const count = blog.count || 1
        Validate.number(count)
        let index = 0
        while (index++ < count) {
            personInfo.blogs.push(Blog.toJSON())
        }
        return personInfo
    }

    /**
     * Generates random literal object with comments written by a person
     * 
     * @since 0.1.0
     * @access public
     * 
     * @param {boolean} includeComment flag to include comments or not
     * @param {object} options literal object specify the type of info to include
     * @param {object} personInfo the wrapper literal object to add personal info to
     * @return {object} the same 'personInfo' wrapper literal object with newly added personal info properties
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
     * const employment = { include: true, count: 1 }
     * 
     * // include blogs the person has authored and the desired number of blogs the person has written
     * const blog = { include: true, count: 2 }
     * 
     * // include comments the person has authored and the desired number of comments the person has written
     * const comment = { include: true, count: 2 }
     * 
     * // gender: 
     * //    0 -> males
     * //    1 -> female
     * const gender = 0
     * const address = true
     * 
     * const options = { gender, dobInterval, address, education, employment, blog, comment }
     * const includeComment = true
     * const personInfo = {}
     * 
     * faker.credential.constructComment(includeComment, options, personInfo)
     * // ->
     * 
     * {
     *   comments:
     *     [
     *       { 
     *         author: 'Bruce Butler',
     *         date: 'Nov 13, 2016',
     *         message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra...',
     *         likes: 487
     *       },
     *       { 
     *         author: 'Mark Scott',
     *         date: 'Jul 16, 2016',
     *         message: 'Nulla aliquam aliquam nibh eget hendrerit. Fusce vulputate tortor mi...',
     *         likes: 218 
     *       },
     *     ] 
     * }
     * 
     */
    static constructComment(includeComment, options, personInfo) {
        Credential.validateArgs(includeComment, options, personInfo)
        if (!includeComment) return
        personInfo.comments = []
        const { comment } = options
        const count = comment.count || 1
        Validate.number(count)
        let index = 0
        while (index++ < count) {
            personInfo.comments.push(Comment.toJSON())
        }
        return personInfo
    }

    /**
     * Class argument validation helper
     * 
     * @since 0.1.0
     * @access private
     * 
     */
    static validateArgs(includeBool, optionsObj, personInfoObj) {
        Validate.boolean(includeBool)
        Validate.nullOrUndefined(optionsObj)
        Validate.nullOrUndefined(personInfoObj)
    }
}

module.exports = Credential