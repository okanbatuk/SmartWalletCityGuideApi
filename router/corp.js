const express = require('express');
const router = express.Router();
const corpInfo = require('../Database/query/corpInfo');

router.get('/corpInfo', async(req,res) => {
    const corps = await corpInfo.getCorpInfo(req.body);
    if(corps.recordset[0].Status != 0) {
        res.json(corps.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found Corporate Informations"});
    }

})

module.exports = router;