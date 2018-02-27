import express from "express"
import {NEWS_LIST} from "./../mock.data/news.list"
import bodyParser from 'body-parser'


import bikeRoutesAPI from './BikeRoutesAPI';
import imageApi from './ImagesAPI';
//var imageApi = require('./ImagesAPI')

const api = express()

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}));

let news = NEWS_LIST;

api.get("/news", (req, res) => {
    res.json(news)
})

api.post("/news", (req, res) => {
    if(req.body.text) {
        news.push({title: req.body.text, id: Math.random(), upvotes: 15, author: 'Jonas'})
    }
    res.json(news)
})


api.use('/route/', bikeRoutesAPI)
api.use('/images/', imageApi)

export default api;

