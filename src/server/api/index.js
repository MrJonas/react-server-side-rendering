import express from "express"
import {NEWS_LIST} from "./../mock.data/news.list"

const api = express();


var bodyParser = require('body-parser')
api.use( bodyParser.json() );       // to support JSON-encoded bodies
api.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,
}));


let news = NEWS_LIST;


api.get("/news", (req, res) => {

    res.json(news)
})

api.post("/news", (req, res) => {
    console.log(req.body);
    if(req.body.text) {
        news.push({title: req.body.text, id: Math.random(), upvotes: 15, author: 'Jonas'})
    }
    res.json(news)
})

export default api;

