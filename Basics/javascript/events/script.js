const Output = document.getElementById("output");
const Username = document.getElementById("username");
const MyButton = document.getElementById("myButton");
const MyImg = document.getElementById("myImg");

function ClickHandler(){
    console.log('Event Handler')

    /*  if(Output.innerText == "Hello"){
        Output.innerText = Username.value;
    } else {
        Output.innerText = "Hello"
    } */

     //Output.innerText = Username.value;

}

function ChangeHandler(){
    console.log('change handler');
    Output.innerText = Username.value;
}

function ChangeColor(){
    //remove class red and replace it
    MyButton.classList.remove('btn-danger');
    MyButton.classList.add('btn-success');
}

function MouseOverHandler(){
    ChangeColor();
    MyImg.src="https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg";
}

function MouseOutHandler(){
    MyImg.src="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg";
    
}