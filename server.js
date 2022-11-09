const express = require('express');
// const { readFile } = require('fs'); //got added automatically when i wrote readFile in app.get
const path = require('path');


// setting up the server using express
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('/public'));


// this will be used for a get request
app.get("/api/notes", (req, res) => {
readFile("./db/db.json", "utf-8")
// res.json(notes)
})



// this will be used for a post request
app.post("/", (req, res) => {

})



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
)