const students = [
    {
        "_id": "63c993feb6f5dc691c2c0ac3",
        "name": "Fannie Buckley",
        "scores": [
            44,
            72,
            37
        ]
    },
    {
        "_id": "63c993fe0b604587275fbfdf",
        "name": "Sherry Petty",
        "scores": [
            50,
            85,
            61
        ]
    },
    {
        "_id": "63c993fef0a0425682c58b2c",
        "name": "Bray Lancaster",
        "scores": [
            37,
            74,
            56
        ]
    },
    {
        "_id": "63c993fe0115dd572cb63892",
        "name": "Hubbard Munoz",
        "scores": [
            99,
            40,
            57
        ]
    },
    {
        "_id": "63c993fe9f8ad8038fc76416",
        "name": "Copeland Ford",
        "scores": [
            66,
            77,
            53
        ]
    },
    {
        "_id": "63c993fef4067267e74d8231",
        "name": "Padilla Bolton",
        "scores": [
            65,
            98,
            39
        ]
    },
    {
        "_id": "63c993fe187dd671983e006d",
        "name": "Mcknight Odonnell",
        "scores": [
            97,
            92,
            40
        ]
    },
    {
        "_id": "63c993fe2ecf8e3dc2bd5393",
        "name": "Bradley Delacruz",
        "scores": [
            57,
            81,
            87
        ]
    },
    {
        "_id": "63c993fefa0735736af48d92",
        "name": "Velazquez Hensley",
        "scores": [
            67,
            45,
            52
        ]
    }
]


// console.log(students[0].id);
// console.log(students[0].name);
// console.log(students[0].scores);
function averageScores(array){

    students.forEach(item => {

        console.log(item.scores)
        let sum =0;
        let averge =0;
       sum= item.scores.reduce(function(total,current){
            return total+current
        })
        // item.scores.forEach(scores => {
        //     console.log(scores)
        //     sum += scores;

        // })
        console.log(sum/3);
        
        
    });
}

averageScores(students);