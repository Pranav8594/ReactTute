
class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visibility: false
        }
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
    }

    handleToggleVisibilty(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibilty}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility && <span>Hey! I am visible now</span>}</p>        
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle></VisibilityToggle>,document.getElementById('app'));





























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
