// Generate from 1 to 100
// print only the numbers that are odd

// let arr = [44,4,4,4,4,4,4,4]

// console.log(arr)
// if / for loop // .push()
let oddNumbers=[] // empty array
for(let number=1;number<=100;number++){
    // console.log(number)
    // % 2 !== 0 > odd numbers
    // % 2 == 0 > even formule
    if(number%2!==0){
        // code here!!!
        oddNumbers.push(number) // inserted odd number
    }
   
}

// https://devdocs.io/


console.log(oddNumbers)