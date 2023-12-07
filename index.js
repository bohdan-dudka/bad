const express = require('express');
const app = express();
// Hardcoded in-memory songs array (in a real app, data would typically come from a database)
const songs = [
  { id: 1, name: 'Get out, Babylon.', band: 'Aquarium' },
  { id: 2, name: 'Hero', band: 'Picnic' },
  { id: 3, name: 'Voulez-Vous Coucher Avec Moi', band: 'Aquarium' },
  { id: 4, name: 'Secret Uzbek', band: 'Aquarium' },
  { id: 5, name: 'Morse code', band: 'Picnic' },
  { id: 2, name: 'Summer', band: 'Kino' }
];
// handle get request
app.get('/', (request, response) => {
  // send back a response in plain text
  response.send('response for GET request');
});

// Route with a route parameter to get songs by band
app.get('/songs/:band', (req, res) => {
  const { band } = req.params; // Access the band parameter from the URL

  // Filter songs based on the band parameter
  const filteredsongs = songs.filter(song => song.band === band);

  res.json(filteredsongs); // Send the filtered songs as a JSON response
});

// start the server
app.listen(3000,
  () => console.log(`server start at http://localhost:3000/`));