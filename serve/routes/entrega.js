const entregaCtrl = require('../controllers/entregaController')
const express = require('express');
const router = express.Router()


router.route('/').post(entregaCtrl.getDeliv);



module.exports = router;
