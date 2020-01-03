const express = require('express');
const router = express.Router();
const corpInfo = require('../Database/query/corpInfo');
const cities = require('../Database/query/city');

router.get('/city', async(req,res) => {
    const city = await cities.getCities();
    if(city.recordset[0].Status != 0) {
        res.json(city.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found City"});
    }
})


router.post('/corpInfo', async(req,res) => {
    const corps = await corpInfo.getCorpInfo(req.body);
    if(corps.recordset[0].Status != 0) {
        res.json(corps.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found Corporate Informations"});
    }

})

module.exports = router;