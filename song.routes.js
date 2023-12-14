const express = require('express');
const songs = require('./songs');
const { blockSpecialBand } = require('./middleware');

const router = express.Router();

// Вывод всего songs.js
router.get('/songs', (request, response) => {
    return response.json(songs);
 });

// Поиск песен по band
router.get('/songs/band/:band', blockSpecialBand, (request, response) => {
    const { band } = request.params;
    const filteredSongs = songs.filter(song => song.band === band);
    response.json(filteredSongs);
 });

router.get('/songswitherror', (request, response) => {
    let err = new Error("Page not found")
    err.statusCode = 400
    throw err
 });

module.exports = router;