
const LOCAL_JWT_SECRET = process.env.JWT_SECRET || " my_local_secret_key"

const SALT_ROUDS = 10

module.exports = {LOCAL_JWT_SECRET, SALT_ROUDS}