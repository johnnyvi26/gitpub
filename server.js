const express = require('express');
const drinks = require('./models/drinks');


const app = express();
const PORT = 3000;

////////////// ROUTES //////////////////

app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});

app.get('/drinks', (req,res)=>{
    res.send(drinks);
});


app.get('/drinks/:idx', (req, res)=>{
    res.render('drinks_index.ejs', {
        drink: drinks[req.params.idx],
        index: req.params.idx,
    });
});




//////////////// PORTS /////////////////

app.listen(PORT, ()=>{
    console.log(`Listening in port`, PORT);
});