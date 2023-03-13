// Brick Calculator - How Many Bricks Do You Need?
// Hoeveel bakstenen heeft u nodig?
 
// 1. Create a function that takes the width, height returns the area of a wall.
// 1. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een muur.
 
// 2. Create a function that takes the width, height returns the area of a single brick.
// 2. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een enkele baksteen.
 
// 3. Create a function that takes wall area and brick area depending on the brick type and returns the number of bricks required.
// 3. Maak een functie die de oppervlakte van de muur en de oppervlakte van de baksteen afhankelijk van het baksteen type teruggeeft en het aantal benodigde bakstenen.

/*
wallArea / BrickSize = BrickRecquired
*/ 

const BrickTypes = {
    standardhousebrick: [0.265, 0.065], 
    standardblock: [0.44, 0.215],
}

//1
function areaWall (long, lag){
    return long*lag; 
}

2//
function areaByBrick(long, lag){
    
    return long *lag
}

3//
function blablabla (wallArea, brickType){

    switch (brickType){
        case "standardhousebrick" : 
                                    // brickRecquire =( wallArea / (BrickTypes.standardhousebrick[0] * BrickTypes.standardhousebrick[1]) )  ;
                                    brickRecquire =( wallArea / areaByBrick( BrickTypes.standardhousebrick[0], BrickTypes.standardhousebrick[1]) );
                                    console.log(`the number of standardhouse brick is ${brickRecquire}`)
                                    break;

        case "standardblock" : 
                                // brickRecquire =( wallArea / (BrickTypes.standardblock[0] * BrickTypes.standardblock[1]) );
                                brickRecquire =( wallArea / areaByBrick( BrickTypes.standardblock[0], BrickTypes.standardblock[1]) );
                                console.log(`the number of standardblock brick is ${brickRecquire}`)
                                break;
                        
                            default : console.log("please enter a correct brickType");
    }
}


blablabla(100,"standardblock");
blablabla(100,"standardhousebrick");