var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const { env } = require('./.env')


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post( '/api/fileanalyse', multer({}).single('upfile'), (req, res) => {
  res.json( {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
} )



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});


// Mongoose
require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post( '/api/fileanalyse', multer({}).single('upfile'), (req, res) => {
  res.json( {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
} )



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
