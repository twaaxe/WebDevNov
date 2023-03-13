
const election = [
    {
        person_name:"John",
        politic_party1:true,
        politic_party2:false,
        politic_party3:false
    },
    {
        person_name:"Michael",
        politic_party1:true,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Jimmy",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    },
    {
        person_name:"Michel",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    },
    {
        person_name:"Gabriel",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Alberto",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    }
]

/*
Politic_party1: 
Politic_party2:
Politic_party3:  
*/


function voteMachine(elect){

    var pol1= pol2= pol3=0;
    var array = [];

    election.forEach(function(item){
        if (item.politic_party1){
            pol1++
        } else if (item.politic_party2){
            pol2++
        } else if (item.politic_party3){
            pol3++
        } 
    })

    // if(pol1>pol2 && pol1 >pol3) {
    //     console.log( "the politics party 1 WON with", pol1, " points");
    // } else if(pol2>pol1 && pol2 >pol3) {
    //     console.log( "the politics party 2 WON with", pol2, " points");
    // } else if(pol3>pol2 && pol3 >pol1) {
    //     console.log( "the politics party 3 WON with" ,pol3, " points");
    // }

    
   /* array.push({
        party1 : pol1,
        party2 : pol2,
        party3 : pol3, 
    }) */

    
    array.push(
    {
        name : "party1",
        nbVote : pol1
    },
    {
        name : "party2",
        nbVote : pol2
    },
    {
        name: "party3",
        nbVote : pol3
    })
    
    
    
    return array;

}

console.log(voteMachine(election));

