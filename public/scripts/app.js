'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = //JSX: Javascrpt XML
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    ' ',
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    ' ',
    React.createElement(
        'p',
        null,
        ' '
    ),
    ' ',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' item One '
        ),
        ' ',
        React.createElement(
            'li',
            null,
            ' item Two '
        ),
        ' '
    ),
    ' '
); //JSX expressions can only have one root element; wrap in <div>

var count = 0;
var increment = function increment() {
    count++;
    console.log("add one", count);
    renderApp();
};
var decrement = function decrement() {
    if (count > 0) {
        count--;
    }
    renderApp();
    console.log("minus one", count);
};
var reset = function reset() {
    count = 0;
    renderApp();
    console.log("reset", count);
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Count: ',
            count,
            ' '
        ),
        ' ',
        React.createElement(
            'button',
            { onClick: increment },
            ' +1 '
        ),
        ' ',
        React.createElement(
            'button',
            { onClick: decrement },
            ' -1 '
        ),
        ' ',
        React.createElement(
            'button',
            { onClick: reset },
            ' reset '
        ),
        ' '
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
