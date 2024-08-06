const submitBtn = document.querySelector("button");
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const ratingNumberText = document.querySelector("#rate-number")

submitBtn.addEventListener("click",()=>{
    const inputNumber = document.querySelector("input:checked");
    if(inputNumber){
        ratingNumberText.textContent=`${inputNumber.value}`;
        mainContainer.classList.add("hidden");
        thanksContainer.classList.remove("hidden");
    }
    else{
        alert("Please choose a number");
    }
})