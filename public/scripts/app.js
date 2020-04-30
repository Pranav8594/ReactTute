'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.state = {
            visibility: false
        };
        _this.handleToggleVisibilty = _this.handleToggleVisibilty.bind(_this);
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibilty',
        value: function handleToggleVisibilty() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibilty },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.visibility && React.createElement(
                        'span',
                        null,
                        'Hey! I am visible now'
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

/*var app = {
    title: 'Visibility toggle',
    msg: 'Hey! I am visible now',
    toggle: false
}

const onToggle = () =>{
    app.toggle = !app.toggle;
    console.log(app.toggle);
    render();
}

var appRoot = document.getElementById('app');

const render = () => {
    var template = ( 
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggle}>{app.toggle ? 'Hide details' : 'Show details'}</button>
            <p>{app.toggle && <span>{app.msg}</span>}</p>        
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();*/
