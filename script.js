function searchEvent(){

let search=document.getElementById("search").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(search))
card.style.display="block";

else
card.style.display="none";

});

}

const buttons=document.querySelectorAll(".card button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="Registered ✔";
btn.style.background="green";

});

});