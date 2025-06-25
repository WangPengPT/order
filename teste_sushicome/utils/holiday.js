
const datas = {
    year: 0,
    holiday: [],
};

async function getHolidaysFromAPI(year) {
    console.log("getHolidaysFromAPI ...");
    try {
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/PT`);
        const data = await response.json();
        return data.map(holiday => holiday.date);
    } catch (error) {
        console.error('API请求失败，使用本地计算', error);
        return null
    }
}


async function todayIsHoliday()
{
    const checkDate = new Date();
    const year = checkDate.getFullYear();

    if (datas.year != year) {
        datas.holiday = await getHolidaysFromAPI(year);
        if (datas.holiday)
        {
            datas.holiday.push(`${year}-06-13`);
            datas.year = year;
        }
        else
        {
            return false;
        }
    }

    const dateString = checkDate.toISOString().split('T')[0];
    const ret = datas.holiday.includes(dateString);

    return ret;
}

function updateToday(appState)
{
    (async () => {
        appState.isFestiveDay = await todayIsHoliday();
    })();
}


module.exports = {
    updateToday
}

