burger = document.querySelector(".hamburger")
navlist = document.querySelector(".navlist")

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
})

down = document.querySelector(".down-menup")
dp = document.querySelector(".dp")

dp.addEventListener('click',()=>{
    if(down.style.display ==="none"){
        down.style.display ="block"
    }
    else{
        down.style.display ="none"
    }
})