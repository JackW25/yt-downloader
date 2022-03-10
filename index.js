const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./static'));
app.listen(PORT, () => {
    console.log(`Website Online!, \n Port: ${PORT}`);
});

app.get('/', function(request, response) {
    res.sendFile('index.html', { root: './' });
})

app.get('/mp4', (request, response) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.get('/mp3', (request, response) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Audio.mp3');
    ytdl(url, {format: 'mp3'}).pipe(res);
});

app.get('/wav', (request, response) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Waveform.wav');
    ytdl(url, {format: 'wav'}).pipe(res);
});
