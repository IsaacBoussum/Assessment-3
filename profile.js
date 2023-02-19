console.log("goodbye world");

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener("click", function(){
    alert("my favorite color is purple")
})

placeBtn.addEventListener("click", function(){
    alert("my bed")
})

ritualBtn.addEventListener("click", function(){
    alert("eating breakfast")
})