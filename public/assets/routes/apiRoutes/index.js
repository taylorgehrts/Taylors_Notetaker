//imports
const router = require('express').Router();
const noteRoutes = require('./notes')

//select ./notes for use
router.use(noteRoutes);

//exports
module.exports = router;