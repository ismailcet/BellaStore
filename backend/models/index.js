const Pool = require("pg").Pool;
const config = require("../config/db.config");

const pool = new Pool(config.db);

module.exports = pool;
