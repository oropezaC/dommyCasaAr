const estadisticaCtrl = require('../controllers/estadisticaController')
const express = require('express');
const router = express.Router();

router.route('/').get(estadisticaCtrl.getBi)


module.exports = router;
