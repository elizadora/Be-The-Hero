//importando express
const express = require('express');
const cors = require('cors');
const routes = require ('./routes');

// aplicação
const app = express();

app.use(cors());
//para a utilização de json
app.use(express.json());
app.use(routes);

//porta de acesso
app.listen(3333);