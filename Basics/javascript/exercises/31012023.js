var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// sum of these numbers

// DO NOT USE REDUCE METHOD

// for loop

var sum = 0;
// 0<9
// 1<9
// 2<9
// 9<9 / false stop code at this point
// for (let x = 0; x < numbers.length; x++) {
//     sum = sum + numbers[x] // sum+=numbers[x]
// }

// console.log(sum)


// Loop 5 to 55
// specified number range between 10 - 20
// for loop + if statement

// for(let startPoint=5;startPoint<=55;startPoint++){
//     // console.log(startPoint)
//     // if(startPoint>=10){
//     //     if(startPoint<=20){
//     //         console.log(startPoint)
//     //     }
//     // }
//     // if(startPoint>=10 && startPoint<=20){
//     //     console.log(startPoint)
//     // }
// }

let people = [{
    "first_name": "Ann-marie",
    "gender": "Female"
}, {
    "first_name": "Harper",
    "gender": "Male"
}, {
    "first_name": "Gordie",
    "gender": "Male"
}, {
    "first_name": "Paulita",
    "gender": "Female"
}, {
    "first_name": "Lizbeth",
    "gender": "Female"
}, {
    "first_name": "Jeniffer",
    "gender": "Female"
}, {
    "first_name": "Adolph",
    "gender": "Male"
}, {
    "first_name": "Cammy",
    "gender": "Female"
}, {
    "first_name": "Lothaire",
    "gender": "Male"
}, {
    "first_name": "Alikee",
    "gender": "Female"
}, {
    "first_name": "Hubie",
    "gender": "Male"
}, {
    "first_name": "Chanda",
    "gender": "Female"
}, {
    "first_name": "Cariotta",
    "gender": "Agender"
}, {
    "first_name": "Vitia",
    "gender": "Genderqueer"
}, {
    "first_name": "Polly",
    "gender": "Female"
}, {
    "first_name": "Inez",
    "gender": "Female"
}, {
    "first_name": "Maryl",
    "gender": "Female"
}, {
    "first_name": "Mair",
    "gender": "Female"
}, {
    "first_name": "Willy",
    "gender": "Female"
}, {
    "first_name": "Quinton",
    "gender": "Male"
}]

// count female and male 
/*

Female: 16
Male: 4

*/
let female = 0;
let male = 0;
// for(let person=0;person<people.length;person++){
//     // console.log(people[person].gender)
//     // if(people[person].gender ==='Male'){
//     //     male++
//     // }
//     // if(people[person].gender ==='Female'){
//     //     female++
//     // }
//     people[person].gender === 'Male' ? male++ : male // ternary operator
//     people[person].gender === 'Female' ? female++ : female // ternary operator
// }

// console.log(`Female Total: ${female}\nMale Total: ${male}`)

// Vote Machine
// JimCarrey's Fancy Party
// NoMoneyNoHoneyParty
// Geeks' party

const VoteMachine = [{
    party_name: "JimCarrey's FAncy Party",
    vote: true
}, {
    party_name: 'NoMoneyNoHoneyParty',
    vote: false
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
    vote: false
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
    vote: false
}]

let result={
    NoMoneyNoHoneyParty:0,
    JimCarreysFancyParty:0,
    GeeksParty:0
}

let partyNames = VoteMachine.map(function(party){
    return party.party_name
}) // collect all party_names 

partyNames = new Set([...partyNames]) // unique data

partyNames = Array.from(partyNames) // convert object data to array list

console.log(partyNames);

for(let party=0;party<VoteMachine.length;party++){
    // console.log(VoteMachine[party])
    if(VoteMachine[party].party_name ===partyNames[0]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.JimCarreysFancyParty++
        }
    }

    if(VoteMachine[party].party_name ===partyNames[1]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.NoMoneyNoHoneyParty++
        }
    }

    if(VoteMachine[party].party_name ===partyNames[2]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.GeeksParty++
        }
    }
}

console.log(Object.entries(result).sort())