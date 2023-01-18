const express = require('express');
const session = require('express-session')
const db = require('./model/sql');
var cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3001;

app.use(cookieParser());



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.use(cors());



app.use(express.json())

app.listen(PORT, () => console.log(`Express Server is running at port ${PORT}`));


app.get('/login/:username/:password', db.login);
app.post('/signup', db.signup);


app.get('/getCategory', db.getCategory);
app.post('/addCategory', db.addCategory);
app.get('/getSingleCategory/:id', db.getSingleCategory);
app.put('/updateCategory/:id', db.updateCategory);
app.delete('/deleteCategory/:id', db.deleteCategory);

app.get('/getGarlic/:uid', db.getGarlic);
app.post('/addGarlic', db.addGalicSeed);

app.get('/getInspector/:uid', db.getInspector);
app.post('/addInspector', db.addInspector);


app.get('/getRecordForCategory/:uid/:cid', db.getRecord);
app.post('/addRecord', db.addRecord);


app.get('/logout', db.logout);

app.get('/getPartners/:uid', db.getPartners);
app.delete('/deleteUser/:id', db.deleteUser);

app.get('/getSingleUser/:uid', db.getSingleUser);
app.put('/updateUser/:uid', db.updateUser);



