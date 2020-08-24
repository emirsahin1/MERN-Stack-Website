const express = require('express')
const app = express()
const port = 5000
const path = require('path');

app.get('/download-app', (req,res) => {
    // res.download('download-file/MuseumofLighting.txt');
    // res.sendFile(path.join(__dirname, "../client/public/index.html"))
    res.send("LEFEOFLEOFKOASKFOKASkd")
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})