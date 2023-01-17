const mysql = require('mysql');


let con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'Asad1234',
    database: 'ksndb'
});


con.connect((err) => {
    if (!err)
        console.log('Connected to DataBase.')
    else
        console.log('Connection Failed\n', JSON.stringify(err, undefined, 2))
});


module.exports = con; 