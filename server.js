const express = require('express')
const server = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const helmet = require('helmet')
require("dotenv/config");

const downloadPath = path.join(__dirname + "/download-file");

const downloadFile = fs.readdirSync(downloadPath)

server.use(helmet());
server.use(express.static(path.join(__dirname, "./client/build")));

mongoose.connect(process.env.DB_CONNECTION_STRING);


server.get('/api/download-app', (req,res) => {

    res.download(path.join(downloadPath, downloadFile[0]));
})

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})