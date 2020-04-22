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
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item One'
        ),
        React.createElement(
            'li',
            null,
            'item Two'
        )
    )
); //JSX expressions can only have one root element; wrap in <div>

var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count:',
        count
    ),
    React.createElement(
        'button',
        { id: 'my-id', className: 'button' },
        '+1'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
