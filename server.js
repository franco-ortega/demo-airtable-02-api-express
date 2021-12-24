const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3500;

app.use(cors());

app.get('/', (req, res, next) => {
    res.send('Welcome to the Maps server.');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
});
