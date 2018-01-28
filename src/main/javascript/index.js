import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'
import AdminApplication from './AdminApplication';
/*import "./resources/static/templates/matherialadm/css/app.css"
import "./resources/static/templates/matherialadm/demo/css/demo.css"
import "./resources/static/templates/matherialadm/scss/app.scss"*/

/*import { Router, Route, hashHistory} from 'react-router';*/

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <AdminApplication/>
    </Provider>,
    document.getElementById('root'));

