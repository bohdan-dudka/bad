const express = require('express')
const songRoutes = require('./song.routes');
const idRoutes = require('./id.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(songRoutes);
app.use(idRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});