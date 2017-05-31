import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const rootElement = document.getElementById('app');

if ('cordova' in window) {
    document.addEventListener("deviceready", init, false);
} else {
    init();
}

function init() {
    ReactDOM.render(
            <App />,
        rootElement
    );
}