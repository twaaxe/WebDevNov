const todoInuput = document.getElementById('todoInput');
const todoList = document.getElementById('todolist');

let todos = [];

//this is an object constructor wit its attribute
function TodoApplication(){

    this.todos =[]

    //this is an object.methode
    this.addTodo =function(title) {
        return this.todos.push({title});
    }
    
    //this is an object.methode
    this.displayTodos = function (){
        todoList.innerHTML ="";

        this.todos.forEach(function(x){
            // console.log(x)
            todoList.innerHTML += `<li class="list-group-item">${x.title}</li>`;
        })
    }

    //this is an object.methode
    this.clickHandler = function(){

        console.log(todoInput.value);

        if(todoInuput.value !==""){ //if there is something to add

             this.addTodo(todoInuput.value); // insert it
             
        } else {alert("WRONG")}
       
        this.displayTodos(); //print them all
        todoInput.value=""; //clean input field
    }

}

const app = new TodoApplication();

todoInput.addEventListener('keydown', (e)=>{
    if (e.code == 'Enter'){
        //console.log("You ve pressed Enter")
        app.clickHandler();
    }
})



