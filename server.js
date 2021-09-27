const express = require('express');
const app = express();
const PORT = 3000;

////////////// ROUTES //////////////////

app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});





//////////////// PORTS /////////////////

app.listen(PORT, ()=>{
    console.log(`Listening in port`, PORT);
});