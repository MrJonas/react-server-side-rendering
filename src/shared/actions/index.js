import "isomorphic-fetch";
import {FETCH_NEWS_REQUEST,FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, ADD_NEWS_REQUEST} from "./actionTypes";
import {getAppUrl} from './../config';

// Action Creators
const requestNews = () => ({ type: FETCH_NEWS_REQUEST });
const receivedNews = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
const newsError = () => ({ type: FETCH_NEWS_FAILURE });

export const fetchNews = () => (dispatch, getState) => {
    dispatch(requestNews());
    return fetch(getAppUrl() + "api/news")
        .then(response => response.json())
        .then(news => dispatch(receivedNews(news)))
        .catch(err => dispatch(newsError(err)));
};


const addNewsRequest = () => ({ type: ADD_NEWS_REQUEST });


export const addNews = (newItem) => (dispatch, getState) => {
    dispatch(addNewsRequest());
    return fetch(getAppUrl() +  "api/news", {
        method: 'POST',
        body: JSON.stringify({text: newItem}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })})
        .then(response => response.json())
        .then(news => dispatch(receivedNews(news)))
        .catch(err => dispatch(newsError(err)));
};