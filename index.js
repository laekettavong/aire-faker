import Random from './lib/utilities/Random'
import DateUtil from './lib/utilities/Date'
import Person from './lib/person/Person'
import Address from './lib/address/Address'
import { number } from './lib/data/constants'
import streets from './lib//data/address/streets'

class CredentialFaker {
    constructor() {
        this.person = Person
        this.address = Address
    }

}

const faker = new CredentialFaker();
if (false) {
    console.log(faker.person.firstName(0))
    console.log(faker.person.firstName(1))
    console.log(faker.person.maleName())
    console.log(faker.person.femaleName())
    console.log(faker.person.lastName())
    console.log(faker.person.fullName(1))

    const interval = {
        startDate: new Date(1970, 0, 1),
        endDate: new Date(1980, 0, 1)
    }

    console.log(Random.date(interval))
    console.log(Random.date(interval).toLocaleDateString('en-US'))
}

if (true) {
    console.log(number)
    console.log(faker.address.toJSON())
    console.log(faker.address.toString())
    console.log(faker.address.address())
    console.log(faker.address.stateAbbreviation())
    console.log(faker.address.city(), faker.address.state(), faker.address.zip())
}


