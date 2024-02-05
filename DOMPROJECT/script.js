var i = document.querySelector("h5")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener("click",function(){

    i.innerHTML="Friends"
    i.style.color="green"
})

remove.addEventListener("click",function(){
    i.innerHTML="UnKnown"
    i.style.color="red"
})
