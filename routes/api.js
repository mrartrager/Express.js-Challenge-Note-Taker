const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require("../db/db");
const { builtinModules } = require("module");

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf8',(data)=>{
        let apiNote = JSON.parse(data)
        res.json(apiNote)
    })
    });
    
    
// router.post("/notes", (req, res) => {
//         const apiNote = JSON.parse(fs.readFile)
//     })
router.post("/notes", (req, res) => {
    let request = req.body;
    // req.body.id = router;
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
})

module.exports=router;