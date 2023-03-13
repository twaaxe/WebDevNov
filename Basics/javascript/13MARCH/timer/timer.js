/*
COUNTDONW:
1- create a Date() objetc thta stop when we want
2- get the time of this objet ( obj.getTime() ==> in millisecond)
3- create a function that will be called back each 1000 millisecod (with setInterval(function(){}))
4-calculae the diference between those 2 and convert it in day hours minut
5-dispaly

*/
        //get element
nbJour= document.getElementById("days")
nbMinute = document.getElementById("minutes")
nbHours = document.getElementById("hours")
nbSecond = document.getElementById("seconds")



        //set end timer
// const birthDay = new Date("2023-03-15");
const birthDay = new Date("jul 16, 2023 16:37:52");
//const birthDay = new Date(2023, 03, 13, 14, 55, 30, 0);


        //display
const actualiser = setInterval(function(){

        //find time remaining
    timeRemaining = birthDay.getTime() - new Date().getTime(); //new Date() = date as today

    hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds


    if (timeleft < 0) {
        clearInterval(actualiser);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("minutes").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        // document.getElementById("end").innerHTML = "TIME UP!!";
    }

}, 1000);








