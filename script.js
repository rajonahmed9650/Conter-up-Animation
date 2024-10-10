let valueDisplays = document.querySelectorAll(".num")
console.log(valueDisplays);

let intervalue  = 5000;

valueDisplays.forEach((valueDisplay)=>{
    let starValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))

    let duration = Math.floor(intervalue / endValue);

    let counter = setInterval(function(){
        starValue += 1;
        valueDisplay.textContent = starValue
        if(starValue == endValue){
            clearInterval(counter)
        }
    },duration)
  
    
})