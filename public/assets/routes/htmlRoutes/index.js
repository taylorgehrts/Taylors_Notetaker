//imports
const path = require('path');
const router = require('express').Router();

//get route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../notes.html'));
});

//get route for index.html using a wildcard
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../index.html'));
})

//exports
module.exports = router;

