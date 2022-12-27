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

