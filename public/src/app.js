class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Indecison App</h1>
                <h2>Put your life in the hands of a computer.</h2>
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
                <p>This is Options component</p>
            </div>
        );
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

const jsx = (
    <div>
        <Header></Header>
        <Action></Action>
        <Options></Options>
        <AddOptions></AddOptions>
    </div>
)
ReactDOM.render(jsx, document.getElementById('app'));