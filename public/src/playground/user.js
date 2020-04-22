var user = {
    name: 'Pranav Joshi',
    age: 18,
    location: 'Melbourne, Aus'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }else{
        return undefined;
    }
   
}

/* Turinary Operator
    syntax: boolean ? option : option
    true ? option1 selected : option2
    false ? option1 : option2 selected
*/
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anon"}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);