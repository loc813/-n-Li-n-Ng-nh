const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const db = require('./config/db/');
const port = 3000;
const route = require('./routes');

// connect to db
db.connect();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true,}),);
app.use(express.json());

// check request and error 
app.use(morgan('combined'));

// template engine 
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
  }));

app.use(express.json());


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource' ,'views'));

// route
route(app);

app.listen(3000, () => {
  console.log(`PORT CONNECTED`);
});