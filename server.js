const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/www'));
app.use(express.json());
let http = require('http').Server(app);

const users = [
    {email: '123@qq.com', password:'123'},
    {email: '456@qq.com', password:'456'},
    {email: '789@qq.com', password:'7789'}
];
// server start
let server = http.listen(3000,function(){

    console.log('server has started')
});

app.get('/',function(req,res){

    let filepath = __dirname + '/www/index.html';
    res.sendFile(filepath)
    console.log("Successfully: ", filepath)
});

app.get('/account', function(req,res){
    let filepath = __dirname + '/www/account.html';
    res.sendFile(filepath)
    console.log("Successfully: ", filepath)
});

app.post('/api/loginform',function(req,res){
    let response = {};

        if (!req.body) {
            console.log('error');
          return res.sendStatus(400);
        }

        console.log(req.body);
            response.data = req.body.data;
            response.valid = true;
            res.send(response);
});