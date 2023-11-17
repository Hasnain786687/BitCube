let express = require('express');
let app = express();
let port = 80;
const path = require('path');
// let mongoose = require('mongoose');

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', express.static('views'));
app.use('/', express.static('views/home'));



app.get('/', (req, res) => {
  res.render('home/index');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });