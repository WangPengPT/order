const { DateTime } = require('luxon')

function format_portugal_datetime(timestamp) {
    const result = DateTime.fromMillis(timestamp, { zone: 'Europe/Lisbon' })
        .toFormat("yyyy-MM-dd HH:mm:ss");

    return result;
}

function get_portugal_timestemp() {
    return DateTime.now().setZone('Europe/Lisbon').toMillis();
}

function get_portugal_timeDate() {
    return DateTime.now().setZone("Europe/Lisbon")
}

function get_portugal_date() {
    return DateTime.now().setZone("Europe/Lisbon").toFormat("yyyy-MM-dd");
}

function get_portugal_date_without_day() {
    return DateTime.now().setZone("Europe/Lisbon").toFormat("yyyy-MM");
}

function is_portugal_lunch_time() {
    const now = DateTime.now().setZone('Europe/Lisbon');
    const hour = now.hour;
    const weekday = now.weekday; // 1 = Monday, 7 = Sunday

    const isWeekday = weekday >= 1 && weekday <= 5;
    const isLunchTime = hour >= 11 && hour <= 15;

    return isWeekday && isLunchTime;
}

module.exports = {
    format_portugal_datetime,
    get_portugal_timestemp,
    get_portugal_timeDate,
    get_portugal_date,
    get_portugal_date_without_day,
    is_portugal_lunch_time
};