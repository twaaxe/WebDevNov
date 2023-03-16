// Step 1: Define 2 functions, 1 for the animation and 1 for the button click to start the animation
// Step 2: Link the function to the button
// Step 3: Create 2 global variables to find '.box1' and 'body' element
// Step 4: Create 2 local variables inside the Animation function to store new random colors
// Step 5: Apply the random colors to the box and the body


// Step 6: Create a setInterval inside the Start function to call the Animation function every 300ms
// Stap 1: Definieer 2 functies, 1 voor de animatie en 1 voor de knopklik om de animatie te starten
// Stap 2: Koppel de functie aan de knop
// Stap 3: Maak 2 globale variabelen om '.box1' en 'body' elementen te vinden
// Stap 4: Maak 2 lokale variabelen in de Animatie-functie om nieuwe willekeurige kleuren op te slaan
// Stap 5: Pas de willekeurige kleuren toe op de box en het lichaam
// Stap 6: Maak een setInterval in de Start-functie om de Animation-functie elke 300 ms aan te roepen



let boxes = document.querySelector('.box1')
let body =document.querySelector('.container')

function Start(){

    // alert("linked")
    setTimeout(animate, 1000)
}


function animate(){

    const red = "red";
    const blue = "blue"

    body = "yellow";
    boxes.style.color = "blue";

}





