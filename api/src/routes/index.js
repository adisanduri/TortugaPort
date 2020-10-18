import portService from '../services/portServices';
import express from 'express';
import path from 'path';

var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

router.get('/api/vessels', (req, res) => {
    res.json(portService());
});

module.exports = router;