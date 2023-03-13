function add(first, second){
    return (first + second);
}


function substract (first, second){
    return first-second;
}

function multiply(first, second){
    return first*second;
}


function divide (first, second){
    return first/second
}

function calculate(first, second, third){
    if ( isNaN(first) || isNaN(second) ){
        alert("veuillez entrer un nombre");
    } else {
        const reslut =  `${first} ${third} ${second}`;
        return eval(reslut); 
    }
}

