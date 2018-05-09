const inventarioCtrl = require('../controllers/inventarioController')
const express = require('express');
const router = express.Router();

router.route('/').get(inventarioCtrl.getInventario)
router.route('/add').post(inventarioCtrl.addToStock)
router.route('/set').put(inventarioCtrl.setToStock)


module.exports = router;
