
//events on web page - interact with web pages
//click event 

// const button = document.querySelector(".btn")
// console.log(button);
// button.addEventListener("click", function(){
//     chnagefirstTask()


// })


// function chnagefirstTask(){
//     const ul = document.getElementsByTagName("ul")[0];
//     let firstChild = ul.firstElementChild;
//     console.log(firstChild);
//     // firstChild.style.background = "red";
//     firstChild.classList.toggle("bg")

// }


//event bubbling 
const grandfather = document.querySelector(".grandfather");
const father = document.querySelector(".father");
const mother = document.querySelector(".mother");
grandfather.addEventListener("click",function(ev){
    console.log("grandfather");

})
father.addEventListener("click",function(ev){
    console.log("father");
    ev.stopPropagation()

})
mother.addEventListener("click",function(ev){
    console.log("mother");

})

const body = document.getElementsByTagName("body")[0]
body.addEventListener("click" , function(){

    console.log("body pe click hua");
})


