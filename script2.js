const btns= document.querySelectorAll(".btn-w");
const storeproducts = document.querySelectorAll(".f-container");

for(i=0;i<btns.length;i++){
  btns[i].addEventListener("click",(e)=>{
    e.preventDefault();

    const filter = e.target.dataset.filter;
    console.log(filter);
    storeproducts.forEach((product)=>{
        if(filter=="all"){
            product.style.display = "block";
        }
        else{
            if(product.classList.contains(filter)){
                product.style.display = "block";
            }
            else{
                product.style.display = "none";
            }
        }
    })
  })
}


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




// change image


let slideIndex1 = 1;

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}


showSlides1(slideIndex1);

// Next/previous controls
function plusSlides(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides1(slideIndex1 = n);
}




