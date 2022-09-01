const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.joint(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.joint(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFiles(path.joint(__dirname, '../../public/index.html'));
});

module.exports = router;