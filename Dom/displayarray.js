//[{},{},{}]
//todo input lena hai array mai store krna hai then dom pe show krna hai

let todos = [];
const container = document.querySelector(".todo-container")

function showtodo(todo){
    let title = todo.title
    let desc = todo.desc
    let div = document.createElement("div")
    div.innerHTML = `<h1>${title}</h1>
            <p>${desc}</p>`
     container.appendChild(div)

}

function displayAlltodo(arr){   // function to display all the todos
    container.innerHTML = "";
    arr.forEach(element => {
        showtodo(element)
    });

}

displayAlltodo(todos)

let form = document.querySelector(".add-todo-form")

form.addEventListener("submit",function(e){  //take user input and push it into the array and show on web page
    e.preventDefault();
    let title = document.querySelector(".title")
    let desc = document.querySelector(".desc")
    let newTodo = {title:title.value, desc:desc.value}
    todos.push(newTodo);
    displayAlltodo(todos)

})


