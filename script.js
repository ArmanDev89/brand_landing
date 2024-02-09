let burger = document.getElementById("burger_menu");
let button = document.getElementById("bbutton");

button.addEventListener("click", function(){
    burger.classList.toggle("active");
    if(burger.classList.contains("active")){
        button.innerHTML = "&#10006";
    } else {
        button.innerHTML = "&#9776";
    }
})
