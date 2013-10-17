app.get('/robots.txt', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send('User-agent: *\nDisallow: /');
    res.end();
});
