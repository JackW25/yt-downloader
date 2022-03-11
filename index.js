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
    response.sendFile('index.html', { root: './' });
})

app.get('/mp4', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(response);
});

app.get('/mp3', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Audio.mp3');
    ytdl(url, {format: 'mp3'}).pipe(response);
});

app.get('/wav', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Waveform.wav');
    ytdl(url, {format: 'wav'}).pipe(response);
});

app.get('/ogg', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Vorbis.ogg');
    ytdl(url, {format: 'ogg'}).pipe(response);
});

app.get('/webm', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Opus.webm');
    ytdl(url, {format: 'webm'}).pipe(response);
});

app.get('/flv', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Flash.flv');
    ytdl(url, {format: 'flv'}).pipe(response);
});