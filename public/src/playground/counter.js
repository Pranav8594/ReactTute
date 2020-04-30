
class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        };

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }

    addOne(){
        /*this.state.count= this.state.count+1; -- incorrect */
        this.setState((prevState) => { // react func to state state -> only need to update the property thats changing 
            return{
                count: prevState.count+1
            }
        });
    }

    minusOne(){
        if(this.state.count > 0){
            this.setState((prevState) => { 
                return{
                    count: prevState.count-1
                }
            });
        }
    }

    reset(){
        if(this.state.count !== 0){
            this.setState(() => { 
                return{
                    count: 0
                }
            });
        }
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter></Counter>,document.getElementById('app'));













/*
let count = 0;
const increment=()=>{
    count++;
    console.log("add one",count);
    renderApp();
}
const decrement=()=>{
    if(count >0){
        count--;
    }
    renderApp();
    console.log("minus one",count);
}
const reset=()=>{
    count=0;
    renderApp();
    console.log("reset",count);
}


const renderApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button  onClick={increment}>+1</button>
            <button  onClick={decrement}>-1</button>
            <button  onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderApp();
*/