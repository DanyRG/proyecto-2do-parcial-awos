require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<h1>Bienvenido a mi servidor REST</h1>');
  });

  app.use(require('./routes/usuario'));
  app.use(require('./routes/categoria'));
 
mongoose.connect('mongodb://localhost:27017/cafeteria', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
}, (err, res) => {
    if(err) throw err;
    console.log('Base de datos ONLINE')
});

app.listen(process.env.PORT ,()=> {
    console.log('Servidor Online-Puerto', process.env.PORT);
});