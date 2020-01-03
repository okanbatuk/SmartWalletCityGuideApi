const sql = require('../mssqlConnector');
const mssql = require('mssql');

const getCities = async () => {
    const pool = sql.getConnection();
    try {
        let result = await pool.request()
            .execute('SP_cities')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports = {
    getCities
}