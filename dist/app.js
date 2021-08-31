"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var app_model_1 = require("./app.model");
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.get("/cats/som", function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is some middleware");
    next();
});
app.get("/", function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats", function (req, res) {
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ som: app_model_1.Cat[1] });
});
app.get("/cats/blue", function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ blue: app_model_1.Cat[0] });
});
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    res.send({ error: "404 not found" });
});
app.listen(8000, function () {
    console.log("server is on..");
});
//# sourceMappingURL=app.js.map