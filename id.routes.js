const express = require('express');
const songs = require('./songs');
const router = express.Router();

// Поиск песни по id
router.get('/songs/id/:id', (req, res) => {
    const { id } = req.params;
    const foundSong = songs.find(song => song.id === parseInt(id));
    if (!foundSong) {
       return res.status(404).json({ error: 'Page not found' });
    }
    res.json(foundSong);
 });

module.exports = router;