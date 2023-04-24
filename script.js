let navbar = document.querySelector("#navbar")
let Close = document.querySelector("#close")
let div = document.querySelector(".div2")
let title = document.querySelector("h3")

navbar.onclick = function(){
    div.style.display = "flex"
    navbar.style.display = "none"
    title.style.visibility = "hidden"
    Close.style.display = "block"
}
Close.onclick = function(){
    div.style.display = "none"
    navbar.style.display = "block"
    title.style.visibility = "visible"
    Close.style.display = "none"
}