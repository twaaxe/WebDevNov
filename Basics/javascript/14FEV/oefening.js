function book(title, author, year){

    this.summary=function(){
        console.log(`The book ${title} written by ${author} was release in ${year}\n------------------------------`);
        return {
            title :this.title, 
            author:this.author,
            year: this.year
        };
    }

}


let pickedBook = [];

let bookOne = new book("Harry Potter", "J.K. Rowling", 2001);
let bookTwo = new book("Potter Harry ", " Rowling K.J.", 2010);
// bookOne.summary();
// bookTwo.summary();


// pickedBook.push(bookOne.summary());
// pickedBook.push(bookTwo.summary());
 
/* ----------------------------------------------------------------------------------------------*/

function calculator (a,b) {

    this.number1 = a;
    this.number2 = b;

    this.multiply = function(){
        return `Result is ${this.number1*this.number2}`
    } 

    this.sum = function(){
        return `Result is ${this.number1+this.number2}`
    } 

    this.substraction = function(){
        return `Result is ${this.number1-this.number2}`
    } 

    this.division = function(){
        return `Result is ${this.number1/this.number2}`
    } 
}


let calcul = new calculator(2,5);
console.log(calcul.sum())











