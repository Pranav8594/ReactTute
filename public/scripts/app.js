'use strict';

var app = {
    title: 'Visibility toggle',
    msg: 'Hey! I am visible now',
    toggle: false
};

var onToggle = function onToggle() {
    app.toggle = !app.toggle;
    console.log(app.toggle);
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            app.toggle ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            app.toggle && React.createElement(
                'span',
                null,
                app.msg
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
