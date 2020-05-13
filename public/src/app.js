class IndecisonApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        /*bind(this) sets the 'this' context for this function so that 'props' can be accessed. Sets the 'this' ctx same as render function. */
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); //since not an event callback the 'this' context is preserved.
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length); //getting rid of decimals
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOptions(option) {

        if (!option) {
            return "Please enter a valid option"
        } else if (this.state.options.indexOf(option) > -1) { // if > -1 means option exits in the array
            return "This option already exists"
        } else {
            this.setState((prevState) => {
                if (option) {
                    return {
                        options: prevState.options.concat([option])
                    }
                }
            })
        }
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}></Action>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}></Options>
                <AddOptions handleAddOptions={this.handleAddOptions}></AddOptions>
            </div>
        )
    }

}


class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );

    }

}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                    What should i do?
                </button>
            </div>
        );
    }

}

class Options extends React.Component {

    constructor(props) {
        super(props); // calling parent constructor
    }

    /*bind(this) sets the 'this' context for this function so that 'props' can be accessed. Sets the 'this' ctx same as render function. */


    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option}></Option>;
                    })
                }
            </div>
        );
    }

}

class Option extends React.Component {


    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }

}

class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //removes spaces before and after text
        const error = this.props.handleAddOptions(option);

        this.setState(() => {
            return {
                error: error
            }
        })

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }

}

ReactDOM.render(<IndecisonApp></IndecisonApp>, document.getElementById('app'));