const express = require('express');
const cors = require('cors')
const router = require('./routes');

const app = express();
const port = 3000;

app.use(cors({origin: "*"}));

router(app);

app.listen(port, () => console.log('Ouvindo na porta 3000.'));

module.exports = app;