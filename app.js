#!/usr/bin/env node
const express = require("express");
const app = express();

const HOST = "0.0.0.0";
const PORT = 4000;

app.get("/", function (request, response) {
    response.send("Hello world! Jenkins");
});

app.listen(PORT, HOST);

console.log(`Listening on http://${HOST}:${PORT}`);
