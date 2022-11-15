const express = require('express');
// const { readFile } = require('fs'); //got added automatically when i wrote readFile in app.get
const path = require('path');
const fs = require('fs')
const { request } = require("express");
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/htmlroutes');

// setting up the server using express
const app = express()
const PORT = process.env.PORT || 5001;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`));
