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

module.exports = {
    format_portugal_datetime,
    get_portugal_timestemp,
    get_portugal_timeDate,
    get_portugal_date
};