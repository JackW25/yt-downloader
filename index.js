const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./static'));
app.listen(PORT, () => {
    console.log(`Website Online!, \n Port: ${PORT}`);
});

    // Homepage //
app.get('/', function(request, response) {
    response.sendFile('homepage.html', { root: './' });
    console.log('Homepage Landed');
});

app.get('/fr', function(request, response) {
    response.sendFile('homepage_fr.html', { root: './localized/fr' });
    console.log('Homepage Landed FR');
});

app.get('/es', function(request, response) {
    response.sendFile('homepage_es.html', { root: './localized/es' });
    console.log('Homepage Landed ES');
});

app.get('/s1', function(request, response) {
    response.sendFile('homepage.html', { root: './styled/grass' });
    console.log('Homepage Landed');
});

app.get('/fr-s1', function(request, response) {
    response.sendFile('homepage_fr.html', { root: './styled/fr/grass' });
    console.log('Homepage Landed FR');
});

app.get('/es-s1', function(request, response) {
    response.sendFile('homepage_es.html', { root: './styled/es/grass' });
    console.log('Homepage Landed ES');
});


    // Downloader Page //
app.get('/yt-downloader-fr', function(request, response) {
    response.sendFile('index_fr.html', { root: './localized/fr' });
    console.log('Homepage Landed FR');
});

app.get('/yt-downloader-es', function(request, response) {
    response.sendFile('index_es.html', { root: './localized/es' });
    console.log('Homepage Landed ES');
});

app.get('/yt-downloader', function(request, response){
    response.sendFile('index.html', {root:'./'});
    console.log('Downloader page Landed');
});

       // Downloads Page //
app.get('/ohno', function(request, response){
    response.sendFile('downloads.html', {root:'./'});
    console.log('Downloader page Landed');
});

app.get('/ohno-fr', function(request, response){
    response.sendFile('downloads_fr.html', {root:'./localized/fr'});
    console.log('Downloader page Landed');
});

app.get('/ohno-es', function(request, response){
    response.sendFile('downloads_es.html', {root:'./localized/es'});
    console.log('Downloader page Landed');
});

    // File Conversions //
app.get('/mp4', (request, response) => {
    var url = request.query.url;
    response.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(response);
        if(!ytdl.validateURL(url)) {
        return response.sendStatus(400);
        };
});

app.get('/mp3', (request, response) => {
    var url = request.query.url;
        ytdl.getInfo(url).then(info => {
           console.log(info.videoDetails.title);
           var title = info.videoDetails.title
        response.header("Content-Disposition", `attachment; filename="${title}.mp3`);
    ytdl(url, {format: 'mp3'}).pipe(response);
    .catch(console.error);
    });
});

app.get('/wav', (request, response) => {
    var url = request.query.url;
        ytdl.getInfo(url).then(info => {
           console.log(info.videoDetails.title);
           var title = info.videoDetails.title
        response.header("Content-Disposition", `attachment; filename="${title}.wav`);
    ytdl(url, {format: 'mp3'}).pipe(response);
    .catch(console.error);
    });
});

app.get('/ogg', (request, response) => {
    var url = request.query.url;
        ytdl.getInfo(url).then(info => {
           console.log(info.videoDetails.title);
           var title = info.videoDetails.title
        response.header("Content-Disposition", `attachment; filename="${title}.ogg`);
    ytdl(url, {format: 'mp3'}).pipe(response);
    .catch(console.error);
    });
});

app.get('/webm', (request, response) => {
    var url = request.query.url;
        ytdl.getInfo(url).then(info => {
           console.log(info.videoDetails.title);
           var title = info.videoDetails.title
        response.header("Content-Disposition", `attachment; filename="${title}.webm`);
    ytdl(url, {format: 'mp3'}).pipe(response);
    .catch(console.error);
    });
});

app.get('/flv', (request, response) => {
    var url = request.query.url;
        ytdl.getInfo(url).then(info => {
           console.log(info.videoDetails.title);
           var title = info.videoDetails.title
        response.header("Content-Disposition", `attachment; filename="${title}.flv`);
    ytdl(url, {format: 'mp3'}).pipe(response);
    .catch(console.error);
    });
});