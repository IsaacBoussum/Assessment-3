console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("you have successfully submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector('img')

img.addEventListener("mouseover", function(){
	alert("nice shoes")
})