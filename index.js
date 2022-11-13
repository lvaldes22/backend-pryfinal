require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./src/database/conexion')
const app = express();
dbConnection();
app.use( cors() );
app.use( express.json() )
app.use('/api/pedidos', require('./src/routes/pedidos'));
app.use('/api/usuarios', require('./src/routes/usuarios'));
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/articulos', require('./src/routes/articulos'));
app.use('/api/yappy', require('./src/routes/yappy'));
app.use('/api/archivos', require('./src/routes/archivos'));
app.use('/api/suscripcion', require('./src/routes/suscripcion'));
app.listen(3000, ()=>{
    console.log("Server corriendo en puerto",3000)
})