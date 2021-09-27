const express = require('express');
const drinks = require('./models/drinks');


const app = express();
const PORT = 3000;

////////////// ROUTES //////////////////

app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});

app.get('/drinks', (req,res)=>{
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
    });
});


app.get('/drinks/:id', (req, res)=>{
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});




//////////////// PORTS /////////////////

app.listen(PORT, ()=>{
    console.log(`Listening in port`, PORT);
});