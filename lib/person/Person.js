import maleNames from '../data/name/person/male_names'
import femaleNames from '../data/name/person/female_names'
import lastNames from '../data/name/person/last_names'
import Randomizer from '../utilities/Random'
import Validator from '../utilities/Validate'

class Person {
    static firstName = (gender) => {
        gender = Validator.checkGender(gender)
        if (gender === 0) {
            return Person.maleName()
        } else {
            return Person.femaleName()
        }
    }

    static maleName = () => {
        return Randomizer.arrayElement(maleNames)
    }

    static femaleName = () => {
        return Randomizer.arrayElement(femaleNames)
    }

    static lastName = () => {
        return Randomizer.arrayElement(lastNames)
    }

    static fullName = (gender) => {
        return `${Person.firstName(gender)} ${Person.lastName()}`
    }

    //age
    //dob
}

module.exports =  Person