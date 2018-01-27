import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducers from './reducers'

var Container = require("./components/templates/matherial/AdminApplicationContainer.react");

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('container')
);