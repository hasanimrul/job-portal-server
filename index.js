const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const fresher = require('./Data/fresher.json')
const experience = require('./Data/experience.json')

app.get('/', (req, res) => {
    res.send('Job portal API is running')
})

app.get('/fresher', (req, res) => {
    res.send(fresher)
})

app.get('/experience', (req, res) => {
    res.send(experience)
})

app.listen(port, () => {
    console.log('Job portal server running on port', port);
});