const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const config = require('./config/config')

app.use(bodyParser());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/',function(req,res){
  res.json({backend:"servicio arriba"})
})
  
app.use('/pedidos', require('./routes/pedido'));
app.use('/entregas', require('./routes/entrega'));
app.use('/cotizacion', require('./routes/cotiza'));
app.use('/inventariado', require('./routes/inventario'));
app.use('/estadisticas', require('./routes/estadisticas'));

app.listen(config.port,()=>{
  console.log("listen in port " + config.port);
})
