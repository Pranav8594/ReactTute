console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e)=>{
    e.preventDefault(); //prevents normal form behaviour
    const option = e.target.elements.option.value; //tagetting form element here 
    console.log(e);
     if (option){
         app.options.push(option);
         e.target.elements.option.value = '';
     }
     renderApp();

}

//TODO: create remove all button
//on click -> wipe the array and -> re-render
const removeAll = () => {

    app.options.length = 0; //empty array
    renderApp();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length); //getting rid of decimals
    const option = app.options[randomNum];
    alert(option);
};

const appRoot =  document.getElementById('app');
const renderApp = ()=>{
    var template = ( //JSX: Javascrpt XML
        <div> 
            <h1>{app.title}</h1>
            <p>{app.subtitle && <p>{app.subtitle}</p>}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <ol>
            { /*Array of JSX */
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            </form>
        </div>
    ); //JSX expressions can only have one root element; wrap in <div>
    ReactDOM.render(template,appRoot);
}

renderApp();