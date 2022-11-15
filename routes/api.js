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

router.delete('/notes/:id', (req, res) => {
    
});


module.exports = router;

