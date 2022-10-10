const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/const'));
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '/html/index.html'));
    res.render('index');
});
app.get('/ouroffers', (req, res) => {
    res.render('ouroffers');

});

app.get('/contact', (req, res) => {
    res.render('contact');

});

app.listen(5000)