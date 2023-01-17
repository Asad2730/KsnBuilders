const express = require('express');
const app = express();
const db = require('./model/sql');

app.use(express.json())

app.listen(3000, () => console.log('Express Server is running at port 3000'));


app.get('/login/:username/:password', db.login);
app.post('/signup', db.signup);


app.get('/getCategory', db.getCategory);
app.post('/addCategory', db.addCategory);

app.get('/getGarlic/:uid', db.getGarlic);
app.post('/addGarlic', db.addGalicSeed);

app.get('/getInspector/:uid', db.getInspector);
app.post('/addInspector', db.addInspector);


app.get('/getRecord/:uid/:cid', db.getRecord);
app.post('/addRecord', db.addRecord);



