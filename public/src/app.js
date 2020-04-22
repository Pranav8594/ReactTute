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
const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button id="my-id" className="button">+1</button>
    </div>
)

var appRoot =  document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);