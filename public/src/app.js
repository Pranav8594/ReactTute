class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: ['option 1', 'option 2', 'option 3']
        }
    }
    
    render(){
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action hasOptions={this.state.options.length > 0}></Action>
                <Options options={this.state.options}></Options>
                <AddOptions></AddOptions>
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

class Action extends React.Component{

    hadndlePick(){
        alert('handlePick');
    }

    render(){
        return(
            <div>
                <button onClick={this.hadndlePick} disabled={!this.props.hasOptions}>
                    What should i do?
                </button>
            </div>
        );
    }

}

class Options extends React.Component{

    constructor(props){
        super(props); // calling parent constructor
        this.handleRemoveAll = this.handleRemoveAll.bind(this); //since not an event callback the 'this' context is preserved.
    }

    /*bind(this) sets the 'this' context for this function so that 'props' can be accessed. Sets the 'this' ctx same as render function. */
    handleRemoveAll(){
        console.log(this.props.options);
    }

    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button> 
            {
                this.props.options.map((option)=>{
                    return <Option key={option} optionText={option}></Option>;
                })
            }
            </div>
        );
    }

}

class Option extends React.Component{


    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }

}

class AddOptions extends React.Component{
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //removes spaces before and after text
        if(option){
            alert(option);
        }
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }

}

ReactDOM.render(<IndecisonApp></IndecisonApp>, document.getElementById('app'));