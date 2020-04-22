console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One','Two']
}

var template = ( //JSX: Javascrpt XML
    <div> 
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p> </p>
        <ol>
            <li>item One</li>
            <li>item Two</li>
        </ol>
    </div>
); //JSX expressions can only have one root element; wrap in <div>

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

var appRoot =  document.getElementById('app');
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