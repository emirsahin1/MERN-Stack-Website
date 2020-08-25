const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const helmet = require('helmet')


const downloadPath = path.join(__dirname + "/download-file");

const downloadFile = fs.readdirSync(downloadPath)

app.use(helmet());
app.use(express.static(path.join(__dirname, "./client/build")));

app.get('/api/download-app', (req,res) => {

    res.download(path.join(downloadPath, downloadFile[0]));
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})