const router = require('express').Router();
const { Router } = require('express');
const fsUtils = require('../helpers/fsUtils.js');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    fsUtils.readFromFile('./db/db.json')
        .then(notes => {
            res.json(JSON.parse(notes));
        })
});

router.post('/notes', (req, res) => {
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


module.exports = router;




// const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');

// router.get("/notes", (req, res) => {
//     fs.readFile("./db/db.json", 'utf8',(data)=>{
//         let apiNote = JSON.parse(data)
//         res.json(apiNote)
//     })
//     })
    
// const apiRouter = require('express').Router();
// const { Router } = require('express');
// const fsUtils = require('../helpers/fsUtils.js');
// const uuid = require('../helpers/uuid');

// apiRouter.get('/notes', (req, res) => {
//     fsUtils.readFromFile('./db/db.json')
//         .then(notes => {
//             res.json(JSON.parse(notes));
//         })
// });

// apiRouter.post('/notes', (req, res) => {
//     let newNote = {
//         title: req.body.title,
//         text: req.body.text,
//         id: uuid()
//     }
//     fsUtils.readAndAppend(newNote, './db/db.json')
//     const response = {
//         status: "success", body: newNote
//     }
//     res.json(response);
// });

// apiRouter.delete('/notes/:id', (req, res) => {
//     fsUtils
//         .removeNote(req.params.id, './db/db.json')
//     const response = {
//         status: "success"
//     }
//     res.json(response);
// });

// module.exports = apiRouter;

    
// // router.post("/notes", (req, res) => {
// //         const apiNote = JSON.parse(fs.readFile)
// //     })
// router.post("/notes", (req, res) => {
//     res.json({
//         "title": "Batman"
//     })
// })

// module.exports=router