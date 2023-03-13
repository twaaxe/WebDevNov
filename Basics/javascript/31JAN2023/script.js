var numbers = [11,22,33,44,55,66,77,88,99];
var sum = 0;


/*
for (var i=0; i<numbers.length; i++){
    sum+= numbers[i];
    console.log(sum);
}
console.log("the final sum is: " + sum)
*/

/*
for (const i in numbers){
    sum+= numbers[i];
    console.log(sum)
}
console.log("the final sum is: " + sum)
*/


for (const i in numbers){
   /*
    if (numbers[i] >= 5 && numbers[i] <=55){
        console.log(numbers[i])
    }
    */
    // console.log( numbers[i] > 5 && numbers[i] < 55 ? numbers[i] : "au dessus de 55 on affihe pas!" )
}

var bigArray = [{
    "first_name": "Maurene",
    "gender": "Female"
  }, {
    "first_name": "Delbert",
    "gender": "Male"
  }, {
    "first_name": "Loraine",
    "gender": "Bigender"
  }, {
    "first_name": "Pasquale",
    "gender": "Male"
  }, {
    "first_name": "Leigha",
    "gender": "Female"
  }, {
    "first_name": "Daisi",
    "gender": "Genderfluid"
  }, {
    "first_name": "Shelia",
    "gender": "Female"
  }, {
    "first_name": "Jocelyn",
    "gender": "Female"
  }, {
    "first_name": "Mendy",
    "gender": "Male"
  }, {
    "first_name": "Quintana",
    "gender": "Female"
  }, {
    "first_name": "Godfry",
    "gender": "Male"
  }, {
    "first_name": "Lynna",
    "gender": "Female"
  }, {
    "first_name": "Denys",
    "gender": "Male"
  }, {
    "first_name": "Rick",
    "gender": "Male"
  }, {
    "first_name": "Curr",
    "gender": "Male"
  }, {
    "first_name": "Clarette",
    "gender": "Female"
  }, {
    "first_name": "Wayland",
    "gender": "Male"
  }, {
    "first_name": "Ashlee",
    "gender": "Female"
  }, {
    "first_name": "Laureen",
    "gender": "Female"
  }, {
    "first_name": "Corny",
    "gender": "Female"
  }, {
    "first_name": "Wilone",
    "gender": "Female"
  }, {
    "first_name": "Rafaellle",
    "gender": "Male"
  }, {
    "first_name": "Laurette",
    "gender": "Female"
  }, {
    "first_name": "Mayer",
    "gender": "Male"
  }, {
    "first_name": "Ryley",
    "gender": "Male"
  }, {
    "first_name": "Davey",
    "gender": "Male"
  }, {
    "first_name": "Rafaela",
    "gender": "Female"
  }, {
    "first_name": "Amaleta",
    "gender": "Female"
  }, {
    "first_name": "Barbaraanne",
    "gender": "Female"
  }, {
    "first_name": "Lucille",
    "gender": "Female"
  }, {
    "first_name": "Robena",
    "gender": "Female"
  }, {
    "first_name": "Dasya",
    "gender": "Female"
  }, {
    "first_name": "Allie",
    "gender": "Male"
  }, {
    "first_name": "Dorita",
    "gender": "Female"
  }, {
    "first_name": "Cissiee",
    "gender": "Bigender"
  }, {
    "first_name": "Dunc",
    "gender": "Male"
  }, {
    "first_name": "Tandy",
    "gender": "Female"
  }, {
    "first_name": "Amye",
    "gender": "Female"
  }, {
    "first_name": "Marcelle",
    "gender": "Female"
  }, {
    "first_name": "Johannes",
    "gender": "Male"
  }, {
    "first_name": "Tobin",
    "gender": "Male"
  }, {
    "first_name": "Pyotr",
    "gender": "Male"
  }, {
    "first_name": "Laurianne",
    "gender": "Female"
  }, {
    "first_name": "Arlyne",
    "gender": "Female"
  }, {
    "first_name": "Sidoney",
    "gender": "Female"
  }, {
    "first_name": "Jules",
    "gender": "Male"
  }, {
    "first_name": "Kiersten",
    "gender": "Female"
  }, {
    "first_name": "Brooke",
    "gender": "Male"
  }, {
    "first_name": "Flint",
    "gender": "Male"
  }, {
    "first_name": "Lorette",
    "gender": "Agender"
  }, {
    "first_name": "Derby",
    "gender": "Male"
  }, {
    "first_name": "Virge",
    "gender": "Male"
  }, {
    "first_name": "Rafferty",
    "gender": "Male"
  }, {
    "first_name": "Nikita",
    "gender": "Male"
  }, {
    "first_name": "Eben",
    "gender": "Male"
  }, {
    "first_name": "Marlene",
    "gender": "Female"
  }, {
    "first_name": "Alexander",
    "gender": "Male"
  }, {
    "first_name": "Amaleta",
    "gender": "Female"
  }, {
    "first_name": "Max",
    "gender": "Genderqueer"
  }, {
    "first_name": "Tedi",
    "gender": "Female"
  }, {
    "first_name": "Ferd",
    "gender": "Male"
  }, {
    "first_name": "Dwayne",
    "gender": "Bigender"
  }, {
    "first_name": "Kacy",
    "gender": "Female"
  }, {
    "first_name": "Decca",
    "gender": "Male"
  }, {
    "first_name": "Tanner",
    "gender": "Male"
  }, {
    "first_name": "Jocelyn",
    "gender": "Polygender"
  }, {
    "first_name": "Dagmar",
    "gender": "Female"
  }, {
    "first_name": "Valida",
    "gender": "Female"
  }, {
    "first_name": "Lucille",
    "gender": "Female"
  }, {
    "first_name": "Analiese",
    "gender": "Female"
  }, {
    "first_name": "Mair",
    "gender": "Female"
  }, {
    "first_name": "Matty",
    "gender": "Male"
  }, {
    "first_name": "Freeland",
    "gender": "Male"
  }, {
    "first_name": "Alejandrina",
    "gender": "Female"
  }, {
    "first_name": "Shell",
    "gender": "Male"
  }, {
    "first_name": "Thia",
    "gender": "Female"
  }, {
    "first_name": "Cash",
    "gender": "Male"
  }, {
    "first_name": "Valaree",
    "gender": "Female"
  }, {
    "first_name": "Nadine",
    "gender": "Female"
  }, {
    "first_name": "Benny",
    "gender": "Male"
  }, {
    "first_name": "Vergil",
    "gender": "Male"
  }, {
    "first_name": "Marigold",
    "gender": "Female"
  }, {
    "first_name": "Johannah",
    "gender": "Female"
  }, {
    "first_name": "Boy",
    "gender": "Male"
  }, {
    "first_name": "Reilly",
    "gender": "Male"
  }, {
    "first_name": "Trenna",
    "gender": "Female"
  }, {
    "first_name": "Jobina",
    "gender": "Bigender"
  }, {
    "first_name": "Ferris",
    "gender": "Male"
  }, {
    "first_name": "Adelle",
    "gender": "Female"
  }, {
    "first_name": "Cullin",
    "gender": "Male"
  }, {
    "first_name": "Wilhelmine",
    "gender": "Female"
  }, {
    "first_name": "Pavla",
    "gender": "Female"
  }, {
    "first_name": "Egon",
    "gender": "Male"
  }, {
    "first_name": "Shepperd",
    "gender": "Genderqueer"
  }, {
    "first_name": "Collete",
    "gender": "Female"
  }, {
    "first_name": "Micky",
    "gender": "Male"
  }, {
    "first_name": "Willdon",
    "gender": "Bigender"
  }, {
    "first_name": "Lesley",
    "gender": "Male"
  }, {
    "first_name": "Prudi",
    "gender": "Female"
  }, {
    "first_name": "Ginger",
    "gender": "Male"
  }]

 /*
  function countSex(array){
    let nbMale = 0;
    let nbFemale = 0;
    for( each in bigArray){
        array[each].gender.trim().toLowerCase() == "male" ? nbMale++ :nbFemale++;
    }
    console.log(`il y a ${nbMale} Hommes et  ${nbFemale} Femmes`);
  }


countSex(bigArray);
*/


/*
function countSex2(array) {
    let nbMale = 0;
    let nbFemale = 0;
    for(var i =0; i<array.length; i++){
        // array[i].gender.trim().toLowerCase() == "male" ? nbMale++ :nbFemale++;

        if (array[i].gender.trim().toLowerCase() == "male"){
            nbMale++;
        } else {
            nbFemale++;
        }
    }
    console.log(`il y a ${nbMale} Hommes et  ${nbFemale} Femmes`);

    
}
countSex2(bigArray);

*/


const VoteMachine = [{
    party_name: "JimCarrey's FAncy Party",
    vote: true
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: true
}, {
    party_name: "Geeks' party",
    vote: true
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: false
}, {
    party_name: "JimCarrey's FAncy Party",
    vote: true
},
{
    party_name: 'NoMoneyNoHoneyParty',
    vote: false
}, {
    party_name: "Geeks' party",
    vote: true
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: false
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: true
}, {
    party_name: "Geeks' party",
    vote: true
},
{
    party_name: "JimCarrey's FAncy Party",
    vote: true
},
{
    party_name: "Geeks' party",
    vote: true
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: true
}]

/*
let JimCarrey = noMoneyNoHoney = Geek =0;
let resulta= [];

for (var i =0; i < VoteMachine.length ; i++){
    VoteMachine[i].party_name.includes("Jim") == true && VoteMachine[i].vote==true ? JimCarrey++ : JimCarrey;
    VoteMachine[i].party_name.includes("Money") == true  && VoteMachine[i].vote==true ? noMoneyNoHoney++ : noMoneyNoHoney;
    VoteMachine[i].party_name.includes("Geeks") == true  && VoteMachine[i].vote==true ? Geek++ : Geek;
    
}

resulta = Object.entries({
    "carrey's party" : JimCarrey,
    "geek's party" : Geek,
    "nomoneybroSorry" : noMoneyNoHoney
}).sort((a,b)=>b[1]-a[1])

// console.log((resulta))
// console.log(Object.entries(resulta));
console.log(resulta)


resulta = Object.entries({
  "carrey's party" : JimCarrey,
  "geek's party" : Geek,
  "nomoneybroSorry" : noMoneyNoHoney
})

console.log(resulta)

*/

let students = [{    id: 1,    name: 'Nina',    email: 'nina@intec.be'},{    id: 2,    name: 'Zana',    email: 'zana@intec.be'},{    id: 3,    name: 'Ara',    email: 'ara@intec.be'}];
let index=0;
while (index < students.length){
  console.log(students[index].name);
  index++;
}
console.log(index)



