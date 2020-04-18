import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovieSaga);
    yield takeEvery('FETCH_GENRES', fetchGenreSaga);
    yield takeEvery('FETCH_DETAILS', fetchDetailSaga);
    yield takeEvery('UPDATE_MOVIE', updateMovieSaga);
}

// Generator functions
function* fetchMovieSaga(action){
    try{
        const response = yield axios.get('/api/movies');
        yield put ({type: 'SET_MOVIES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchMovieSaga', error);
    }
}

function* fetchGenreSaga(action){
    try{
        const response = yield axios.get('/api/genres');
        yield put ({type: 'SET_GENRES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchGenreSaga', error);
    }
}

function* fetchDetailSaga(action){
    try{
        const response = yield axios.get(`/api/details/${action.payload}`);
        yield put ({type: 'SET_DETAILS', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchDetailSaga', error);
    }
}

function* updateMovieSaga(action){
    try{
        yield axios.put(`/api/details`, action.payload);
        yield put ({type: 'FETCH_MOVIES'});
        yield put ({type: 'FETCH_DETAILS', payload: action.payload.movie_id});
    }
    catch(error){
        console.log('Error in updateMovieSaga.', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the details of current selection
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        case 'CLEAR_DETAILS':
            return [];
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
