
const arr = [
    "Может ещё раз?", 
    "Давай ещё)", 
    "Жми!!", 
    "Ахх, ещё!", 
    "БОЛЬШЕ!!!", 
    "ЕЩЁ БОЛЬШЕ!!!", 
    "Уже слишком много...", 
    "Прекрати пожалуйста...", 
    "Ну хватит, я устала...", 
    "ХВАТИТ!!",
    "Нажми ссылку пожалуйста..."
];


let button = document.querySelector("button");


let count = 0; 

let link = document.querySelector("a")

button.addEventListener("click", function() {
    

    button.textContent = arr[count];
    

    count++; 

    if (count >= arr.length) {
        button.disabled = true;
   button.style.opacity = "0.5";       
        button.style.cursor = "not-allowed"; 
        link.style.pointerEvents = "auto";
        link.style.color = "#e0527d";
        link.style.cursor = "pointer";
        link.textContent = "Теперь жми❤️";


    }
});