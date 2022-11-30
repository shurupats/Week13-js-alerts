function start(){
    let name = askName();
    sayHello(name);
}

function askName(){
    return prompt(`Как тебя зовут?`);
}

function sayHello(name='Аноним'){
    alert(`Привет, ${name}!`);
}