const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
const connectWithDb = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes'));
app.use(express.static('./assets')); // for getting static
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
app.listen(PORT||5000,function(err){
    if(err){
        console.log(`error in running the ${PORT}`);
        return;
    }
    console.log(`Server is running @ ${PORT}`);
    connectWithDb();
})
