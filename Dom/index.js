// const el = document.getElementsByClassName("huihui")
// const el = document.querySelector(".huihui");
// const el = document.querySelectorAll(".huihui")
// const el = document.querySelector(".huihui")
// console.log(el)

// const abc = document.createElement('div');
// abc.textContent = "This is cretaed through js";
// abc.innerText = "Hey";
// document.body.appendChild(abc);


const header = document.getElementById("header");
// console.log(header);

const para = document.getElementsByClassName("para")[1];
// console.log(para);

const h = document.querySelector("#header");
const i = document.querySelector(".para");
// console.log(h);


// const q = document.querySelectorAll(".para")[1]
// console.log(q);

//html properties
/*
1. innerhtml
2. inneretxt
3. text content - hidden text show hunda ede ch
*/

let body = document.getElementsByTagName("body")[0]
// console.log(body);

// let inner = body.innerHTML
// console.log(inner);
// body.innerHTML = "<h1> set using dom </h1>"

// console.log(h.innerText);
// console.log(h.textContent);
// h.innerText = "header form js"
// console.log(h);

// console.log(q.innerText);
// console.log(q.textContent);


//getAttributes

// console.log(i.getAttribute("class"));

//set attribute
i.setAttribute("id","pdhsaff")
console.log(i);


//classList
console.log(para.classList.add("para5"));
console.log(para.classList.remove("para5"));
console.log(para.classList);

let button = document.querySelector(".btn")
function display(){
    header.classList.toggle("hide")
}

button.addEventListener("click", () => {
    display()
})

let arr = ["red","pink","blue","green","gray","yellow","orange"]
function changebackground(){
    // body.style.background = arr[Math.floor(Math.random()*10)];

}
// setInterval(changebackground,1000)
let id = setInterval(changebackground)


/*
parent
child
siblings - previous sibling of x , x , next sibling of x
append - 
appendChild - nodes daal skde aa 
 */


// console.log(i);
// console.info(i.parentNode);
// console.log(i.parentElement); // parent element cho parent niklda
// console.log(i.children);

// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.lastChild);
// console.log(body.childNodes);




// console.log(para.previousSibling);
// console.log(para.nextSibling);


// console.log(para.previousElementSibling);
// console.log(para.nextElementSibling);



// console.log(para.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling); //acessing from others

// const nest = document.querySelector(".nested")
// console.log(nest.parentElement.parentElement.nextElementSibling.remove);


// const del = document.querySelector(".delete")
// // console.log(del.parentElement.parentElement.remove());
// console.log(del.parentElement.previousElementSibling.getAttribute("id"));


// //append
// let ul = document.getElementsByTagName("ul")[0];
// console.log(ul);
// let newtodo = `  <li>
//         <h1 id="2" class="title">todo</h1>
//         <div>
//             <button></button>
//             <button></button>
//             <button class ="delete2">delete</button>
//         </div>
//     </li>`
// ul.appendChild(newtodo) // throws error because it not a node

//appendChild

//adding element to child 
/**
 * create a new element using createElement
 * insert content using either innerhtml or innertext
 * append the newly created element into the container using appendchild or append
 */


// function addtodo(){
//     let li = document.createElement("li");
//     li.innerHTML = ` <h1 id="4" class="title">todo</h1>
//         <div>
//             <button></button>
//             <button></button>
//             <button class ="delete2">delete</button>
//         </div>`

//         ul.appendChild(li);
       
// }

// addtodo()


