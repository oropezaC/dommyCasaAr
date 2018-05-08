const inventarioCtrl = require('../controllers/inventarioController')
const express = require('express');
const router = express.Router();

router.route('/').get(inventarioCtrl.getInventario)

module.exports = router;
