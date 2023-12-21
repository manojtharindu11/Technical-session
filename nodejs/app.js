const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/getusers', (req, res) => {
    controller.getUsers((callback) => {
        res.send(callback);
    });
});

module.exports = app;