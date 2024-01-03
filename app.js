var minus = document.querySelector(".budget-section .items-amount .minus");
var plus = document.querySelector(".budget-section .items-amount .plus");
var num = document.querySelector(".budget-section .items-amount .items-num");
var value = parseInt(num.innerHTML);

plus.addEventListener("click",()=>{
value++;
num.innerHTML = value;
});
minus.addEventListener("click", ()=>{
    if (value == 0) {
        return num;        
    }else{
        value--;
        num.innerHTML = value;
    }
})