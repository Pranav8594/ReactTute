var app = {
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
render();
