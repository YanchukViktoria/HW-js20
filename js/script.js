/* 1.1 */

const listOfImages = document.querySelector(".gallery");
let currentSlide = 0;


function moveSlides(position) {
    const totalSlides = listOfImages.children.length;
    
	if (position >= totalSlides) {
        position = 0;
	} else if (position < 0) {
		position = totalSlides - 1;
    } 
    
    currentSlide = position;
	
    listOfImages.style.transform = `translateX(-${position * 800}px)`;
}


document.addEventListener('keydown', (e) => {
    if(e.key == "ArrowLeft"){
        moveSlides(currentSlide -1)
    }

});
document.addEventListener('keydown', (e) => {
    if(e.key == "ArrowRight"){
        moveSlides(currentSlide+1)
    }

});


/* 1.2 */

const box = document.getElementById("boxes");
const inp = document.querySelector("input");
const btnCreate = document.querySelector(`[data-action="render"]`);
const btnDelete = document.querySelector(`[data-action="destroy"]`);

let curentWidth = 30;
let curentHeight = 30;

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
}

function createBox(amount) {
    const boxes = [];
    for (let i = 0; i < amount;i++){
        const box = document.createElement("div");
        box.style.width = `${curentWidth}px`;
        box.style.height = `${curentHeight}px`;
        box.style.backgroundColor = getRandomRGB();
        boxes.push(box)

        curentWidth +=10;
        curentHeight +=10;
    }

    box.append(...boxes);
}

function deleteBoxes() {
    boxes.innerHTML = '';
  }

btnCreate.addEventListener("click", () => {
    const amount = Number(inp.value);
    createBox(amount);
});
btnDelete.addEventListener("click", () => deleteBoxes());