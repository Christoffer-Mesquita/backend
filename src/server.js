const app = require('./app')
require('dotenv').config();


app.listen(process.env.BACK_PORTA, () => console.log('[LOGS] Iniciado na porta: ' + process.env.BACK_PORTA));