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

function get_portugal_time_period() {
    const hour = DateTime.now().setZone('Europe/Lisbon').hour;

    if (hour >= 11 && hour <= 15) {
        return "lunch";
    } else if (hour >= 18 && hour <= 24) {
        return "dinner";
    } else {
        return "other";
    }
}

module.exports = {
    format_portugal_datetime,
    get_portugal_timestemp,
    get_portugal_timeDate,
    get_portugal_date,
    get_portugal_date_without_day,
    get_portugal_time_period
};