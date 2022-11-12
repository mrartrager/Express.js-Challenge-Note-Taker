const router = require('express').Router();
const fs = require('fs');
const path = require('path');



router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf8',(data)=>{
        let apiNote = JSON.parse(data)
        res.json(apiNote)
    })
    })
    
    
router.post("/notes", (req, res) => {
        const apiNote = JSON.parse(fs.readFile)
    })

    module.exports=router