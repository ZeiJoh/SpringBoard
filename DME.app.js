document.getElementById("container")
document.querySelector("#container")
document.querySelectorAll(".second")
document.querySelector("ol .third")

let item = document.querySelector("#container");
item.innerText = "hello!"; 

footer.className += "Main"; 

let newItem = document.querySelector(".footer"); 
footer.classlist.add("main"); 

let footer = document.querySelector(".footer"); 
footer.classList.remove("main"); 

let newLi = document.createElement("li"); 
newLi.innerText = "four"

let list = document.querySelector("ul"); 
list.appendChild(newLI); 

let bkgchange = document.querySelectorAll("ol li"); 
for (let i = 0; i < bkgchange.length; i++) {
    bkgchange[i].style.backgroundColor = "green";    
}

let footer = document.querySelector(".footer"); 
footer.remove(); 