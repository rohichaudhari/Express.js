const {Router} = require('express');
const { getdata ,savedata,updatedata, deletedata} = require('../Controller/project.controller');

const router = Router()

router.get('/get',getdata);
router.post('/post',savedata);
router.put('/update/:id',updatedata);
router.delete('/delete/:id',deletedata)
module.exports = router;