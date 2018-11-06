module.exports = {
    'number': [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    'sex': [0, 1],
    'sexTypes': ['male', 'female'],
    'alphanumeric': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'n', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    'alphabetLowercase': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'n', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    'alphabetUppercase': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'N', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    'emailHosts': ['gmail', 'yahoo', 'outlook', 'mail', 'aol', 'live', 'msn', 'icloud', 'inbox', 'yandex', 'zoho', 'email', 'juno', 'earthlink', 'hotmail'],
    'emailExtensions': ['.com', '.net', '.org', '.edu', '.info', '.biz', '.us', '.gov'],
    'loremCount': 5,
    'locale': ['en-US'],
    'defaultOptions': { gender: 0, address: false, education: false, employment: false, blog: false, comment: false, dobInterval: { startDate: new Date(1970, 0, 1), endDate: new Date(1980, 0, 1) } },
    'dateIntervals': {
        'dob': { startDate: new Date(1970, 0, 1), endDate: new Date(1980, 0, 1) },
        'collegeEnrollment': { startDate: new Date(1998, 7, 1), endDate: new Date(2008, 8, 1), yearsEnrolled: 4 },
        'collegeFounded': { startDate: new Date(1850, 0, 1), endDate: new Date(1960, 0, 1) },
        'workHistory': { startDate: new Date(2008, 0, 1), endDate: new Date(2018, 5, 1), yearsWorked: 7, monthsWorked: 3 },
        'companyFounded': { startDate: new Date(1920, 0, 1), endDate: new Date(2005, 0, 1) },
        'blogCreated': { startDate: new Date(2016, 0, 1), endDate: new Date() },
        'commentCreated': { startDate: new Date(2016, 5, 1), endDate: new Date() },
    },
    'dateOptions': {
        'enUs': { year: 'numeric', month: 'short', day: 'numeric', locale: 'en-US', startMonth: 8, endMonth: 4, startDate: 1, endDate: 17, gradMonth: 4, gradDate: 25 }
    }
}