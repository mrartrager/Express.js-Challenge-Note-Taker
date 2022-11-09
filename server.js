const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('/public'));


// this will be used for a get request
app.get("/", (req, res) => {

})



// this will be used for a post request
app.post("/", (req, res) => {

})



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
)