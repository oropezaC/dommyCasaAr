const cotizaCtrl = require('../controllers/cotizaController');
const express = require('express');
const router = express.Router()

router.route('/').post(cotizaCtrl.saveCotiza);

module.exports = router;
