
const arr = [
    "Обычное нажатие", 
    "Двойное нажатие", 
    "Тройное нажатие", 
    "СУПЕР НАЖАТИЕ", 
    "МЕГА НАЖАТИЕ", 
    "БОЖЕСТВЕННОЕ НАЖАТИЕ", 
    "КОСМИЧЕСКОЕ НАЖАТИЕ", 
    "СУПЕР МЕГА БОЖЕСТВЕННО КОСМИЧЕСКОЕ НАЖАТИЕ", 
    "Нажми ссылку пожалуйста <3"
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