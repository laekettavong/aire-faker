import Randomizer from './Random'

class DateUtil {
    static randomDate = ({ startDate, endDate }) => {
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }
}

export default DateUtil