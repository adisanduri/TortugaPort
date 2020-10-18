import express from 'express';
import path from 'path';
//var indexRouter = require('./routes/index');
import indexRouter from './routes/index';

const app = express(),
    bodyParser = require("body-parser"),
    port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server listening on the port:${port}`);
});