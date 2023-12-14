function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next(); 
 }
 
 function blockSpecialBand(req, res, next) {
    if (req.params.band === 'Kino') {
        res.status(403).send('Unavailable Band');
    } else {
        next();
    }
 }

 module.exports = { logRequest, blockSpecialBand};