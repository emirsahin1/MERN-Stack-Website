const express = require('express')
const server = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');
const helmet = require('helmet')
require("dotenv/config");

const EmailSubscriber = require('./models/email-subscriber')
const downloadPath = path.join(__dirname + "/download-file");
const downloadFile = fs.readdirSync(downloadPath);

server.use(express.json());
server.use(helmet());
server.use(express.static(path.join(__dirname, "./client/build")));


mongoose.connect(process.env.DB_CONNECTION_URL, {useUnifiedTopology: true, useNewUrlParser: true},
  error => {
          if(error){
            console.log("Connection Failed " + error);}
            else(console.log("Connected"))})
  
  

//Post request for newsletter
server.post('/api/subscribe', async (req,res) => {
  if(validateEmail(req.body.email)){
  try{
    const newSub = new EmailSubscriber(req.body);
    await newSub.save();
    res.status(200).send("You have subscribed to our newsletter!");
  }

  catch(err){
    res.status(400).send("Server Failure");
  }
}
  else(res.status(400).send("Please enter a valid email address!"))
})


server.get('/api/download-app', (req,res) => {
  
  res.download(path.join(downloadPath, downloadFile[0]));
})

server.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})


/**Checks to see if email fits pattern email.adc.abc*/
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}