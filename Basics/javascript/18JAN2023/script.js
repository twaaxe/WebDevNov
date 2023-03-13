let letters = "abcdefghijklmnopqrstuvwxyz";
let msg = [
70, 111, 108, 108, 111, 119,
32, 116, 104, 101, 32, 119,
104, 105, 116, 101, 32, 114,
97, 98, 98, 105, 116, 46
]


// 1. write a function that changes letters to utf-16

function changeToutf16(string){
    let array = string.split("");
    let reponse = [];
    // console.log(array);
    array.forEach(function(item){
        console.log(item.charCodeAt());
        // reponse.push(item.charcodeAT());
        
    })
    // console.log(reponse);
}





// 2. write a function that converts utf-16 to letters

function changeToLetters(array){

    message="";
    array.forEach(function(item){
        message += String.fromCharCode(item);
        // console.log(finalString);
    })
    console.log(message)
    
}

changeToutf16(letters);
changeToLetters(msg);







