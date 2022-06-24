const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); // build middleware

const beautyRoute = require('./beauty0');
const cors=require("cors");

const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(logger('dev'));  // initialized middleware

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));






app.use('/beauty',beautyRoute);
app.listen(5000,()=>{
    console.log("Server started on port 5000");
})
