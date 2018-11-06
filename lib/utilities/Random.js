import mersenne from 'mersenne'

class Random {
    static number = (size) => {
        return mersenne.rand(size)
    }

    static arrayElement = (array) => {
        const rIndex = Random.number(array.length - 1)
        return array[rIndex]
    }

    static arrayElements = (array, count) => {
        const randElements = []
        for (let i = 0; i < count; i++) {
            randElements.push(Random.arrayElement(array))
        }
        return randElements.join('')
    }

    /*
    const interval = {
        startDate: new Date(1970, 0, 1),
        endDate: new Date(1980, 0, 1)
    }
    */
    static date = ({ startDate, endDate }) => {
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }
}

export default Random