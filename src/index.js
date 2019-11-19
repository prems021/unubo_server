"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = require("body-parser");

var cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 8081;
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
