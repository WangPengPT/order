
function getCurrentPeriod() {
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay() // 0 = Sunday, 6 = Saturday

    // 判断是否是周末
    const isWeekend = (day === 0 || day === 6)

    if (isWeekend) {
        return 'weekend'
    }

    // 判断是否是中午 12:00 - 15:00
    if (hour >= 1 && hour < 17) {
        return 'lunch'
    }

    // 判断是否是晚上 17:00 - 23:00
    if (hour >= 17 && hour < 24) {
        return 'dinner'
    }

    return 'other'
}


function getCurentPeoplePrice(lunchPrice, dinnerPrice, isFestiveDay) {

    if (isFestiveDay) return { adult: dinnerPrice, children: (dinnerPrice / 2) }

    const period = getCurrentPeriod()
    switch (period) {
        case 'lunch':
            return { adult: lunchPrice, children: (lunchPrice / 2) }
        default:
            return { adult: dinnerPrice, children: (dinnerPrice / 2) }
    }
}

module.exports = {
    getCurentPeoplePrice
}