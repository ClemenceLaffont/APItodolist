"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var router = express.Router();
var host = 'localhost';
var port = 8000;
app.listen(port, host, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('listening on port ' + port);
});
