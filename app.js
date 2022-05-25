
const express = require('express');
const ejs = require('ejs');

const app = express(); 


app.use(express.urlencoded( {extended:true} )) //fetching data from html forms
app.use(express.static("public"));

app.set('view engine', 'ejs');


let subjects = [];


app.get('/', (req, res) => {

    res.render('home')

});


app.get('/profile', (req, res) => {

    res.render('profile', {
        subjects : subjects
    })
});


app.get('/add', (req, res) => {

    res.render('addSub')
});


app.get('/delete', (req, res) => {

    res.render('deleteSub');
});



app.get('/change', (req, res) => {

    res.render('changeSub');
})



app.post('/add', (req, res) => {

    const arrSubject = {

        title : req.body.title,
        code : req.body.code
    }

    subjects.push(arrSubject);

    res.redirect('/profile')

})










app.listen(3000, () => {

    console.log('Runs at Port 3000 ');

})



