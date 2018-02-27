import express from 'express';

const bikeRoutesAPI = express();

var bikeRoute = require('./models/bikeRoute');

bikeRoutesAPI.get('/all', function (request, response) {
    bikeRoute.find({published: true}, (err, routes) => {
        if (err) response.send(err);
        response.json(routes);
    });
});

bikeRoutesAPI.get('/stats', function (request, response) {
    bikeRoute.find({published: true}, (err, routes) => {
        if (err) response.send(err);
        let stats = {count: routes.length, distance: 0, atractions: 0};
        routes.forEach(route => {
            stats.distance += route.distance ? route.distance : 0
            if (route.atractions) {
                route.atractions.forEach(atraction => stats.atractions += atraction.show_only_in_map ? 0 : 1);
            }
        });
        response.json(stats);
    });
});

bikeRoutesAPI.get('/latest', function (request, response) {
    bikeRoute
        .find({published: true})
        .sort({sorting_date: -1})
        .limit(1)
        .exec((err, routes) => {
            if (err) response.send(err);
            response.json(routes);
        });
});

bikeRoutesAPI.get('/latest/:number', function (request, response) {
    bikeRoute
        .find({published: true})
        .sort({sorting_date: -1})
        .limit(parseInt(request.params.number))
        .exec((err, routes) => {
            if (err) response.send(err);
            response.json(routes);
        });
});

bikeRoutesAPI.post('/search', function (request, response) {
    if (request.body.text) {
        bikeRoute.find(
            {published: true, $text: {$search: request.body.text}},
            {score: {$meta: "textScore"}}
        )
            .sort({score: {$meta: 'textScore'}})
            .exec(function (err, results) {
                if (err) response.send(err);
                response.json(results);
            });
    } else {
        bikeRoute.find({published: true}, (err, routes) => {
            if (err) response.send(err);
            response.json(routes);
        });
    }
});

bikeRoutesAPI.get('/:url', function (request, response) {
    var query = bikeRoute.find({url: request.params.url, published: true});
    query.select(' ');
    query.exec(function (err, bikeRoute) {
        if (err) response.send(err);
        if (bikeRoute.length == 1) {
            response.json(bikeRoute[0]);
        } else {
            response.status(404);
            response.json(null);
        }
    });
});

module.exports = bikeRoutesAPI;
