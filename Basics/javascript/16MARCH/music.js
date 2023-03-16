// Exercise
// 1. Use querySelectorAll to select all the keys elements
// 2. Use querySelectorAll to select all the audio elements
// 3. Create keydown event listener on document to log the key value of the key that was pressed. (e.key) and add a class of playing to the key element that was pressed
// 4. Create a function that takes a key value as an argument (data-key="75")
// 5. Loop through the audio elements and play the audio element that has the same data-key as the key value passed to the function
// 6. Create switch statement that calls the function with the correct key value for each key
// 7. Test it out!



const allKeys = document.querySelector(".container > .keys")
console.log("all key", allKeys)
arrayAllKeys = Array.from(allKeys)


function play(key){

    let audioElem = document.querySelector(`audio[data-key = ${key}]`)
    let sound = new Audio(audioElem)
    sound.currentTime = 0;
    audioElem.play()

}


document.addEventListener('keydown', (e)=>{
    console.log(e.keyCode)
    let audio;
    const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (keyElement) 
        { keyElement.classList.add('playing')    // Remove after 2 seconds        
        setTimeout(() => {
            keyElement.classList.remove('playing')
        }, 200) }
    
    switch (e.keyCode){
        //a
        case (65) :
            // audio =new Audio( document.querySelector("audio[data-key='65']"))
            // audio.play();

            audio = new Audio("sounds/clap.wav")
            audio.play()

            // play(e.keyCode)
            break;

        //s
        case (83) :
            audio = new Audio("sounds/hihat.wav")
            audio.play()
            break;

        //d
        case (68) :
            audio = new Audio("sounds/kick.wav")
            audio.play()
            break;


        //f
        case (70) :
            audio = new Audio("sounds/openhat.wav")
            audio.play()
            break;
        
        
        //g
        case (71) :
            audio = new Audio("sounds/boom.wav")
            audio.play()
            break;

        //h
        case (72) :
            audio = new Audio("sounds/ride.wav")
            audio.play()
            break;

        
        //j
        case (74) :
            audio = new Audio("sounds/snare.wav")
            audio.play()
            break;


        //k
        case (75) :
            audio = new Audio("sounds/tom.wav")
            audio.play()
            break;

        
        //l
        case (76) :
            // document.querySelector("audio[data-key='76']")
            // alert("you pressed the code " + e.keyCode)
            audio = new Audio("sounds/tink.wav")
            audio.play()
            break;
            
        /*case 32 :
            
            for(let i=0; i<2; i++){

                setInterval(function(){
                    audio = new Audio("sounds/tink.wav")
                    console.log("zaeze")
                    audio.play();
                }, 500)

                setInterval(function(){
                    audio = new Audio("sounds/tom.wav")
                    console.log("zaeze")
                    audio.play();
                }, 1000)

                setInterval(function(){
                    audio = new Audio("sounds/hihat.wav")
                    console.log("zaeze")
                    audio.play();
                }, 750)
        }
        break;*/
              
    }
})



