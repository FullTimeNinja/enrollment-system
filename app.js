
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const app = express(); 


app.use(express.urlencoded( {extended:true} )) //fetching data from html forms
app.use(express.static("public"));

app.set('view engine', 'ejs');

const req = require('express/lib/request');


let subjects = [];

app.get('/', (req, res) => {

    res.render('home')

});


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  })
  
  connection.connect(function(err){
      if(err) throw err;
      console.log('Connected...');
  })


app.get('/profile', (req, res) => {

    res.render('profile', {
        subjects : subjects
    })
});


app.get('/add', (req, res) => {;
    
    res.render('addSub')
});


app.get('/delete', (req, res) => {
    
    res.render('deleteSub');
});

app.get('/change', (req, res) => {

    res.render('changeSub');
})

app.delete('/delete', (req, res) => {
    res.send('Subject Deleted')
  })

app.post('/add', (req, res) => {

    const arrSubject = {
        title : req.body.title,
        code : req.body.code
    }
    
    var sql = "INSERT INTO subject VALUES('"+ req.body.title +"', '"+ req.body.code +"')"

    connection.query(sql, (err, row, fields) => {
        if (err) throw err
        console.log();
    })
    subjects.push(arrSubject);
    res.redirect('/profile')
})










app.listen(3000, () => {

    console.log('Runs at Port 3000 ');

})



