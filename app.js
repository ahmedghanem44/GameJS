const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/mongo-games';
const games = require('./routes/gameApi');

app.use('/',games);

mongoose.connect(db,err=>{
    if(err){
        console.log('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})

app.get('/',(req,res)=>{
    res.send('Default Route')
});

const port = 5000;
app.listen(port,() => console.log('Lisenting to port '+port));