const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(cors({origin: "*"}));

routes(app);

app.listen(port, () => console.log('Ouvindo na porta 3000.'));

module.exports = app;