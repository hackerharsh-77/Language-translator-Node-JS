const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const translate = require('translate');
const app = express();

app.get('/',function(req,res){
    res.send("hello world");
});

translate('hello how are you',{from:'en',to:'hi'}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

app.listen(3000,console.log("running on port 3000"));