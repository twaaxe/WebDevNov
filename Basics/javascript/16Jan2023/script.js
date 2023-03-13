var fullText = " maxime Vitae quo fuga voluptatem mollitia 100 dolores 1200 deleniti reiciendis 475 Vitae fugiat  obcaecati totam, corrupti maxime";

var result;

//1 charAt(position<number>) extrecat char from a string
/*console.log("d'abord result = " + result);

 result = fullText.charAt(0);
 console.log(result);
 
 result = fullText.charAt(6);
 console.log(result);

 result = "End of result";
 console.log(result);
*/


 //2 charCode At
 console.log(fullText.charCodeAt(6));

3// concat
/*
var txt1 = "hello";
var txt2  = "you";
result = txt1.concat(" world ").concat("how are ").concat(txt2);
console.log(result);
*/

4// endswith(<string>)
/*
result = fullText.endsWith("hello");
console.log(result);
result = fullText.endsWith("maxime");
console.log(result);
*/

//5
//6
// console.log(result);
result = String.fromCharCode(86);

//7
fullText = " maxime Vitae word quo fuga voluptatem word mollitia 100 dolores 1200 deleniti word reiciendis 475 Vitae fugiat  obcaecati totam, corrupti maxime";
result =fullText.includes("quo");
console.log(result);



//8
result = fullText.indexOf("Vitae");
console.log(result);

result = fullText.lastIndexOf("Vitae");
console.log(result);

//9 substr/substring
result = fullText.substring(0,15);
console.log(result);

//10 toLowerCase 
result = "HELLO WORLD";
console.log(result.toLowerCase());

//11 tuUpperCase
result = "keybord";

console.log(result.toUpperCase());

//12
result = fullText.match("microsoft");
console.log(result);

result = fullText.match("mollitia");
console.log(result);

console.log("e-l")
result = fullText.match(/[e-l]+/g);
console.log(result);


console.log("a-z A-Z")
result = fullText.match(/[a-zA-z]+/g);
console.log(result);

console.log("a-z A-Z chiffre")
result = fullText.match(/[a-zA-Z0-9]+/g);
console.log(result);

console.log("/A WORD/")
result = fullText.match(/word+/g);
console.log(result);





// 12. match() https://regex101.com/
result = FullText.match('microsoft');
result = FullText.match('intec')
result = FullText.match(/[a-zA-Z0-9]+/g)
result = FullText.match(/microsoft/g)

// 13. text.repeat(<number>)
result = FullText.repeat(3).repeat(5)
result = "#".repeat(10)

// 14. replace()
result = result.replace('#','$')

// 15. replaceAll()
result = result.replaceAll('#','$')
result = "wwwwwwwwwmicrosoftwwwwwwwwwwwwww".replace(/[a-z]/g,"lol")

var user_email="jimmy@microsoft.com johnny@gmail.com admin@yandex.com"
var myEmailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
result = [...user_email.matchAll(myEmailRegex)]

function FindAllEmails(stringData){
    return stringData.match(myEmailRegex)
}

var myStringData = "abc@intec.com admin@gmail.com"

result = FindAllEmails(user_email)


var FindEmails = "bilal@microsoft.com mohammed@gmail.com bilal@gmail.com ara@abc.be prince@brussel.be"

result = FindEmails.match(/[a-zA-Z]+@(gmail.com)/g) // only gmail.com emails

// 16. split()
result = "bilal,ahmed,ara,mohammed, nina,zana,prince,axel"
result = "a1-b2-3c-d3-e4-f5-7g"
//result = result.split(' ')
result = result.split('-')
result = "a1|b2|b3|b4|b5"
result = result.split("|");

// 17.trim()
result = "          hello world              "
result = result.trim();

// 18 search()
result = "Microsoft Products".search(/Products/g) // position of the word i search for
result = "Microsoft Products Products".search("Products") // position index


// 19 toString()
result = ['a','b','c','d','e'].toString()


console.log(result, typeof result)




