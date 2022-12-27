// navbar hamburger 



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


// carousel


var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}





// cart price

function test(){

    
var surat = 0;
var guj = 20;
var india = 40;

  var base = document.getElementById("bpi");
  var total = document.getElementById("tpi");

 var basep= parseInt(base.innerHTML);
// var tp = parseInt(total.innerHTML);


var tp = 0;

console.log(basep)
    var loc = document.getElementById("l1");
    var select = loc.options[loc.selectedIndex].text;
    if(select==="Surat"){
        tp = surat + basep;
        total.innerHTML=tp
        console.log(tp)
    }
    else if(select==="Gujarat"){
        tp = guj + basep;
        console.log(tp)
        total.innerHTML=tp;
    }
    else if(select==="Other State"){
        tp = india + basep;
        console.log(tp)
        total.innerHTML=tp
    }
}


