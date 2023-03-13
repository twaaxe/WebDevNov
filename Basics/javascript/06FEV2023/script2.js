/*
const BrickTypes = {
    standardhousebrick: [0.265, 0.065], 
    standardblock: [0.44, 0.215],
}


function brickCalculator(wallWidth, wallHeight, brickWidth, brickHeight){
    let getWallArea = wallHeight * wallWidth;
    let brickSize = brickWidth * brickHeight;
    let numberofBricks = getWallArea /brickSize;
    console.log(`The number of bricks are ${Math.round(numberofBricks)}`);
}


brickCalculator(40,10, BrickTypes.standardhousebrick[0],  BrickTypes.standardhousebrick[1]); // answer is 23222


function autoSpeed(distance, time){
    let speed = (distance/time).toFixed(2) ;
    console.log(`la vitesse est de ${speed}Km/H`)
}

autoSpeed(40,12)
*/


//Calculator

const calculator = {
    sum : function(a,b){
        console.log( a+b);
    },
    
    sub : function(a,b){
        console.log( a-b);
    },

    multip : function(a,b){
        console.log (a*b);
    },

    divise : function(a,b){
        console.log (a/b);
    },
}

calculator.divise(2,5)


const Drone = {
    runEngine:()=> console.log('Drone has been started'),
    fly:() => console.log("Drone is flying"),
    flyTo:coordinate => console.log(`Drone is flying to ${coordinate}`),
    takePhoto:()=>console.log("photo captured"),
    returnBase: () => console.log("Going back to the base")
}


function Joystick(keypress, location){
    switch(keypress) {
        case "run" : Drone.runEngine();
            break;
        case "fly" : Drone.fly();
            break;
        case "flyTo" : Drone.flyTo(location);
            break;
        case "Photo" : Drone.takePhoto();
            break;
        case"Base" : Drone.returnBase();
    }

}

Joystick("flyTo", "a location")