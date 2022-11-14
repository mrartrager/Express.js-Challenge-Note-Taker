const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid')

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf8',(data)=>{
        let apiNote = JSON.parse(data)
        res.json(apiNote)
    })
    })
    
    
// router.post("/notes", (req, res) => {
//         const apiNote = JSON.parse(fs.readFile)
//     })
// router.post("/notes", (req, res) => {

// });

router.post("/notes", (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    fsUtils.readAndAppend(newNote, './db/db.json')
    const response = {
        status: "success", body: newNote
    }
    res.json(response);
});

router.delete('/notes/:id', (req, res) => {
    fsUtils
        .removeNote(req.params.id, './db/db.json')
    const response = {
        status: "success"
    }
    res.json(response);;
  });

module.exports=router