class IndecisonApp extends React.Component{
    
    render(){
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer.';
        const options = ['option 1', 'option 2', 'option 3'];
        return (
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action></Action>
                <Options options={options}></Options>
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

    render(){
        return(
            <div>
                <button>What should i do?</button>
            </div>
        );
    }

}

class Options extends React.Component{

    render(){
        return(
            <div>
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

    render(){
        return(
            <div>
            <p>This is AddOptions component</p>
            </div>
        );
    }

}

ReactDOM.render(<IndecisonApp></IndecisonApp>, document.getElementById('app'));