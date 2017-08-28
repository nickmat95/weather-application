import app from '../server.js';

app.get('/weather', (req, res) => {
    res.send('Hello World!');
});
