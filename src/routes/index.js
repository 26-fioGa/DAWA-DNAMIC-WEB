const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index');
})
router.get('/generic', (req, res) => {
    res.render('generic');
})
router.get('/elements', (req, res) => {
    res.render('elements');
})

module.exports = router;