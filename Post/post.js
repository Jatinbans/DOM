const postContainer = document.querySelector(".post-container")
postContainer.addEventListener("click", function(ev){
    // console.log(ev.target.classList.contains("like"));
    //like --> likecount++0
    if(ev.target.classList.contains("like")){
        console.log("likecount++");
    }
    if(ev.target.classList.contains("comment")){
        console.log("commnet hogya");
    }
    if(ev.target.classList.contains("share")){
        console.log("share hogya");
    }
    if(ev.target.classList.contains("post-image")){
        console.log("postImage clicked");
    }
    if(ev.target.classList.contains("profile-image")){
        console.log("profileImage clicked");
    }
    if(ev.target.classList.contains("profile-name")){
        console.log("profileName clicked");
    }

})


//add post 
/*
1. title input box uthao aur add form ke submit hone pe post container add kro new post ko
*/
const form = document.querySelector("#post-add-form")
const input = document.querySelector("#post-title")
form.addEventListener("submit",function(ev){
    ev.preventDefault()
    addPost();
    
})
function addPost(){
    const value = input.value
    let div = document.createElement("div")
    div.innerHTML = `<div class="profile">
            <span class="profile-image">profile-image</span>
            <span class="profile-name">profile-name</span>
        </div>
        <div class="title">
            ${value}
        </div>
        <div class="post-image">
            <img src="" alt="post-image">
        </div>
        <div class="buttons">
            <button class="like">like</button>
            <button class="comment">comment</button>
            <button class="share">share</button>
        </div>`

        postContainer.appendChild(div)

}

addPost();

//Nitesh1234-crypto/ - github repo 