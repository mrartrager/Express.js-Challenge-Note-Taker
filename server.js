const express = require('express');
// const { readFile } = require('fs'); //got added automatically when i wrote readFile in app.get
const path = require('path');
const fs = require('fs')

// setting up the server using express
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('/public'));


app.get('/' (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})


app.get("/notes", (req, res) => {

})


// this will be used for a get request
app.get("/api/notes", (req, res) => {
fs.readFile("./db/db.json", "utf-8")
// not sure how to write fsreadFile 
// fs.readFile(path.join((__dirname, 'db', 'db.json'), 'utf-8' => {
// res.json(notes)
// })
})


app.post("/notes", (req, res) => {
    res,sendFile(path.join(_dirname, "public", "notes.html"))
})


app.post("/api/notes", (req, res) => {
    
})




app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
)