// tutaj rozwiązanie
let licznik = 10;
const btn = document.querySelector("button");
const li = document.querySelectorAll("li");



// btn.addEventListener("click", () => {
//     for (i = 0; i < li.length; i++) {
//         li[i].style.display = "block";
//         li[i].style.fontSize = licznik + "px";
//     }
//     licznik++;
// });

btn.addEventListener("click", () => {
    li.forEach((li) => {
        li.style.display = "block";
        li.style.fontSize = licznik + "px";
    })
    licznik++;
});