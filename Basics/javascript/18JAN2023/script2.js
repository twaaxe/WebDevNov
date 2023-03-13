let students =[];
/*
full_name:"John Doe"
age: 20
email: "johndoe@microsoft.com"
phone: "123-456-7890
address: "123 Main St.
*/
// 3. write a function that adds a student to the students array and displays the students array
function addStudent(f_name, l_name, age, email, phone, adrs){
        let newStudent = {
            full_name : f_name,
            last_name : l_name,
            age : age,
            email : email,
            phone : phone,
            address : adrs
        };
        students.push(newStudent);
        console.log(students)
    
}

addStudent("twag", "axel", 23, "MONMAIL", 09090909, "rue du moulin");

addStudent("van schil", "nicolas", 26, "MONMAIL", 09090909, "rue du moulin");

// 4. write a function that encode a string to base64
function toBase64(string){
    // let array = string.split('');
    let base64ed = btoa(string);
    console.log(base64ed)

}


function toString(code){
    let decoded = atob(code);
    console.log(decoded);
}

/*
toBase64("this is a string");

toString("dGhpcyBpcyBhIHN0cmluZw==");
*/
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/


const base64Tool = {
    Encrypt : function (string){
        // let array = string.split('');
        let base64ed = btoa(string);
        console.log(base64ed)
    
    },
    Decrypt : function (code){
        let decoded = atob(code);
        console.log(decoded);
    }
}

/*
base64Tool.Encrypt("this ih how we do it");
base64Tool.Decrypt("dGhpcyBpaCBob3cgd2UgZG8gaXQ=");
*/

let names = "john, peter, mary, susan, john, mary";
// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
// DisplayArray(SortArray(ConvertStringToArray(names)))

function ConvertStringToArray(str){
    let array = str.split(",");
    let name= [];
    array.forEach(function(i){
        name.push(i.trim());
    })
    return name;
}

function SortArray(data){
    return data.sort();

}

function DisplayArray(data){
    return data;
}

console.log(DisplayArray(SortArray(ConvertStringToArray(names))));
