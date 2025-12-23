
const datas = {
    year: 0,
    holiday: [],
};

async function getHolidaysFromAPI(year) {
    console.log("getHolidaysFromAPI ...");
    try {
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/PT`);
        const data = await response.json();

        let ret  = [];
        for (let i = 0; i < data.length; i++) {
            let holiday = data[i];
            if (holiday.counties == null)
            {
                ret.push(holiday.date)
            }
        }
        return ret;
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
        const value = await todayIsHoliday();
        appState.updateSettings("isFestiveDay", value);
    })();
}


module.exports = {
    updateToday
}

