//imports
const router = require("express").Router();
const {notes} = require('../../../../db/db.json');
const {createNewNote,deleteNote} = require('../../../../lib/createNewNote');

//get for notes
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})
//post for notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})
//delete for notes
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

//exports
module.exports = router;