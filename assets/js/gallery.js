document.addEventListener("DOMContentLoaded", () => {

const items = document.querySelectorAll(".photo-item");
const lightbox = document.querySelector(".lightbox");
const img = lightbox.querySelector("img");

let current = 0;

function show(index){
current = index;
img.src = items[index].href;
lightbox.classList.add("show");
}

items.forEach((item,i)=>{
item.addEventListener("click",e=>{
e.preventDefault();
show(i);
});
});

document.querySelector(".lb-close").onclick = () =>{
lightbox.classList.remove("show");
};

document.querySelector(".lb-prev").onclick = ()=>{
current = (current - 1 + items.length) % items.length;
img.src = items[current].href;
};

document.querySelector(".lb-next").onclick = ()=>{
current = (current + 1) % items.length;
img.src = items[current].href;
};

});
