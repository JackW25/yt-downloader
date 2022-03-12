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
    console.log('Homepage Landed');
});
    
app.get('/mp4', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(response);
    console.log(url);
});

app.get('/mp3', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Audio.mp3');
    ytdl(url, {format: 'mp3'}).pipe(response);
    console.log(`${url}.mp3`);
});

app.get('/wav', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Waveform.wav');
    ytdl(url, {format: 'wav'}).pipe(response);
    console.log(`${url}.wav`);
});

app.get('/ogg', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Vorbis.ogg');
    ytdl(url, {format: 'ogg'}).pipe(response);
    console.log(`${url}.ogg`);
});

app.get('/webm', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Opus.webm');
    ytdl(url, {format: 'webm'}).pipe(response);
    console.log(`${url}.webm`);
});

app.get('/flv', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Flash.flv');
    ytdl(url, {format: 'flv'}).pipe(response);
    console.log(`${url}.flv`);
});