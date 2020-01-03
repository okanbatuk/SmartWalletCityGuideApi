const sql = require('../mssqlConnector');
const mssql = require('mssql');

const getCorpInfo = async (data) => {
    const pool = await sql.getConnection();
    try {
       let result = await pool.request()
            .input('cityID', mssql.Int,data.cityID)
            .input('corpType', mssql.Int,data.corpType)
            .execute('SP_getCorpInfo')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports = {
    getCorpInfo
}