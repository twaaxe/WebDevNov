//Arrow function

// const myFunction = name => name;
// console.log(myFunction("zeze"))


// const myFunction=(first, last)=> `${first} ${last}` ;
// console.log(myFunction("zeze", "zzsdeza"));
//


// const myFunction = (fisrt, last)=>{
//     return `${fisrt} ${last}` ;
// }
// console.log(myFunction("zeze", "zzsdeza"));



var maVariable = "coffee";
const getMsg = name => {
    var fullText = `I turn ${name} into code`;
    fullText = fullText.toUpperCase();
    return fullText;
}

console.log(getMsg(maVariable));




