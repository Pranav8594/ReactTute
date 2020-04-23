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