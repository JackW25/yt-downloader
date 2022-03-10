const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static('./static'));
app.listen(5000, () => {
    console.log("Website Online!");
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' });
})

app.get('/mp4', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.get('/mp3', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Audio.mp3');
    ytdl(url, {format: 'mp3'}).pipe(res);
});

app.get('/wav', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Waveform.wav');
    ytdl(url, {format: 'wav'}).pipe(res);
});