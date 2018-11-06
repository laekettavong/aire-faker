import Random from '../utilities/Random'
import { number } from '../data/constants'
import cities from '../data/address/cities'
//import states from '../data/address/states'
import { streets, types } from '../data/address/streets'
import { states, abbreviations } from '../data/address/states'

class Address {
    static address = () => {
        return `${Random.arrayElements(number, 4)} ${Random.arrayElement(streets)} ${Random.arrayElement(types)}`
    }

    static state = () => {
        return Random.arrayElement(states)
    }

    static stateAbbreviation = () => {
        return Random.arrayElement(abbreviations)
    }

    static city = () => {
        return Random.arrayElement(cities)
    }

    static zip = () => {
        return Random.arrayElements(number, 5)
    }

    static toJSON = () => {
        return {
            address: Address.address(),
            city: Address.city(),
            state: Address.state(),
            zip: Address.zip()
        }
    }

    static toString = () => {
        return `${Address.address()}\n${Address.city()}, ${Address.state()} ${Address.zip()}`
    }
}

module.exports = Address