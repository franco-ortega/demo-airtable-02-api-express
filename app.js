require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const Airtable = require('airtable');
const { API_KEY, BASE } = process.env;

app.use(express.json());
app.use(cors());

const base = new Airtable({ apiKey: API_KEY}).base(BASE);
const MAPS = 'Maps';

app.get('/', (req, res, next) => {
    res.send('Welcome to the Maps server.');
});

app.get('/maps', (req, res, next) => {
    base(MAPS)
    .select({})
    .eachPage(function page(records, fetchNextPage) {
        res.send(records);
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

})

module.exports = app;