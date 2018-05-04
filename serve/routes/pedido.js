const pedidoCtrl = require('../controllers/pedidoController')
const express = require('express');
const router = express.Router()


router.route('/').post(pedidoCtrl.getPedidos);
router.route('/:token').get(pedidoCtrl.getOne);
router.route('/:token').put(pedidoCtrl.changeSts);


module.exports = router;
