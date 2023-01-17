const express = require('express');
const session = require('express-session')
const db = require('./model/sql');

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json())

app.listen(3000, () => console.log('Express Server is running at port 3000'));


app.get('/login/:username/:password', db.login);
app.post('/signup', db.signup);


app.get('/getCategory', db.getCategory);
app.post('/addCategory', db.addCategory);

app.get('/getGarlic/', db.getGarlic);
app.post('/addGarlic', db.addGalicSeed);

app.get('/getInspector/', db.getInspector);
app.post('/addInspector', db.addInspector);


app.get('/getRecord/:cid', db.getRecord);
app.post('/addRecord', db.addRecord);


app.get('/logout', db.logout);



