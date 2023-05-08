import { Howl, Howler } from 'howler';

//1
const allKeys = document.querySelector(".container > .keys")
console.log("all key", allKeys)
arrayAllKeys = Array.from(allKeys)

function play(key){

}

document.addEventListener('keydown', (e)=>{
    console.log(e.keyCode)
    let audio;

    Howler.volume(1.0)
    const sound = new Howl({
        src: ['sounds/clap.wav']
      });
    
    switch (e.keyCode){
        //a
        case (65) :
            // const audio =new Audio( document.querySelector("audio[data-key='65']"))
            // audio.play();
            console.log(e.keyCode)
            // audio = new Audio("sounds/clap.wav")
            // audio.play()
            sound.play()
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
            
        case 32 :
            
            for(let i=0; i<2; i++){

                /*
                setTimeout(function(){
                    audio = new Audio("sounds/tink.wav")
                    console.log("zaeze")
                    audio.play();
                }, 2000)
                */

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
        break;
              
    }
})



