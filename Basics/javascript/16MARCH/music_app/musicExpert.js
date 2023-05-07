document.addEventListener('keydown', (e) => {
    let audio;

    const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    console.log(keyElement)


    if (keyElement) {
        keyElement.classList.add('playing')    // Remove after 2 seconds        
        setTimeout(() => {
            keyElement.classList.remove('playing')
        }, 200)

    }

    switch (e.keyCode) {
        //a
        case (65):
            audio = new Audio("sounds/clap.wav")
            audio.play()
            break;

        //s
        case (83):
            audio = new Audio("sounds/hihat.wav")
            audio.play()
            break;

        //d
        case (68):
            audio = new Audio("sounds/kick.wav")
            audio.play()
            break;


        //f
        case (70):
            audio = new Audio("sounds/openhat.wav")
            audio.play()
            break;


        //g
        case (71):
            audio = new Audio("sounds/boom.wav")
            audio.play()
            break;

        //h
        case (72):
            audio = new Audio("sounds/ride.wav")
            audio.play()
            break;


        //j
        case (74):
            audio = new Audio("sounds/snare.wav")
            audio.play()
            break;


        //k
        case (75):
            audio = new Audio("sounds/tom.wav")
            audio.play()
            break;


        //l
        case (76):
            // document.querySelector("audio[data-key='76']")
            // alert("you pressed the code " + e.keyCode)
            audio = new Audio("sounds/tink.wav")
            audio.play()
            break;

    

    }
})



