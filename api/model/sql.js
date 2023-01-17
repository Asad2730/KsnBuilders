const con = require('./connection')


module.exports.signup = (req, res) => {

    let obj = { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, password: req.body.password };
    con.query('insert into users set ?', obj, (err, row, field) => {
        if (!err) {
            console.log('1 Rows effected!');
            res.json({ "Message": "One row inserted" });
            res.end();
        }
        else {
            console.log(err);
            res.send('unable to insert data please try again latter!');
            res.end();
        }
    })
}


module.exports.login = (req, res) => {

    let sql = 'select * from users where username = ? and password = ?';
    con.query(sql, [req.params.username, req.params.password], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            req.session.uid = results[0]['id'];
            res.json(results);
            res.end();
        } else {
            res.send('user not found!');
        }
        res.end();
    })
}

module.exports.logout = (req, res) => {
    req.session.destroy();
    res.end();
}


module.exports.addCategory = (req, res) => {

    let obj = { name: req.body.name };
    con.query('insert into category set ?', obj, (err, row, field) => {
        if (!err) {
            console.log('1 Rows effected!');
            res.json({ "Message": "One row inserted" });
            res.end();
        }
        else {
            console.log(err);
            res.send('unable to insert data please try again latter!');
            res.end();
        }
    })
}


module.exports.getCategory = (req, res) => {

    let sql = 'select * from category';
    con.query(sql, [], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
            res.end();
        } else {
            res.json(results);
        }
        res.end();
    })
}


module.exports.addGalicSeed = (req, res) => {

    let obj = {
        user_id: parseInt(req.session.uid),
        date: req.body.date,
        amount_received: parseFloat(req.body.amount_received),
        total: parseFloat(req.body.total),
        detail: req.body.total
    };
    con.query('insert into garlicseed set ?', obj, (err, row, field) => {
        if (!err) {
            console.log('1 Rows effected!');
            res.json({ "Message": "One row inserted" });
            res.end();
        }
        else {
            console.log(err);
            res.send('unable to insert data please try again latter!');
            res.end();
        }
    })
}


module.exports.getGarlic = (req, res) => {
    let uid = req.session.uid;
    let sql = 'select * from garlicseed where user_id = ?';
    con.query(sql, [uid], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
            res.end();
        } else {
            res.json(results);
        }
        res.end();
    })
}




module.exports.addInspector = (req, res) => {

    let obj = {
        user_id: parseInt(req.session.uid),
        date: req.body.date,
        amount: parseFloat(req.body.amount),
        paid: parseFloat(req.body.paid),
        detail: req.body.total
    };
    con.query('insert into inspector set ?', obj, (err, row, field) => {
        if (!err) {
            console.log('1 Rows effected!');
            res.json({ "Message": "One row inserted" });
            res.end();
        }
        else {
            console.log(err);
            res.send('unable to insert data please try again latter!');
            res.end();
        }
    })
}


module.exports.getInspector = (req, res) => {
    let uid = req.session.uid;
    let sql = 'select * from inspector where user_id = ?';
    con.query(sql, [uid], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
            res.end();
        } else {
            res.json(results);
        }
        res.end();
    })
}



module.exports.addRecord = (req, res) => {

    let obj = {
        user_id: parseInt(req.session.uid),
        date: req.body.date,
        amount: parseFloat(req.body.amount),
        detail: req.body.detail,
        cat_id: parseInt(req.body.cat_id),
    };
    con.query('insert into records set ?', obj, (err, row, field) => {
        if (!err) {
            console.log('1 Rows effected!');
            res.json({ "Message": "One row inserted" });
            res.end();
        }
        else {
            console.log(err);
            res.send('unable to insert data please try again latter!');
            res.end();
        }
    })
}


module.exports.getRecord = (req, res) => {
    let uid = req.session.uid;
    let cid = req.params.cid;
    let sql = 'select * from records where user_id = ? and cat_id = ?';
    con.query(sql, [uid, cid], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
            res.end();
        } else {
            res.json(results);
        }
        res.end();
    })
}
