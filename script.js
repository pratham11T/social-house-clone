var main = document.querySelector("#main");
var btn = document.querySelector("#btn");
var circle = document.querySelector("#circle");
var page1 = document.querySelector("#btm")
var nav = document.querySelector("#nav")
var flag = 0

btn.addEventListener("click", function(){
    if(flag==0){
        main.style.backgroundColor = "#111"
        main.style.color = "#E3DFDC"
        nav.style.border = "#E3DFDC"
        page1.style.color = "#E3DFDC"
        btn.style.backgroundColor = "#777"
        circle.style.left = "47px"
        btn.style.border = "1.5px solid #111"
        circle.style.backgroundColor = "#E3DFDC"
        flag = 1
    }
    else{
        main.style.backgroundColor = "#E3DFDC"
        main.style.color = "#111"
        btn.style.backgroundColor = "#E3DFDC"
        page1.style.color = "#111"
        circle.style.left = "5px"
        btn.style.border = "1.5px solid #F05D22"
        circle.style.backgroundColor = "#F05D22"
        flag = 0
    }
})



// btn.addEventListener("click", function(){
//     if(flag==0){
//         circle.style.left = "5px"
//         flag = 1
//     }
//     else{
//         circle.style.left = "47px"
//         flag = 0
//     }

// })