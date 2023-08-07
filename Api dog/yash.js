const myPromis = fetch("https://dummyjson.com/products"); let save = []; let
card = document.getElementById("Box"); myPromis .then((myPromis) =>
myPromis.json()) .then((myOpenData) => { save = myOpenData; for (let i in save)
{ let ss = save.products; for (let i = 0; i < ss.length; i++) { //
console.log(card); let store = document.createElement("p"); store.innerText =
ss[i].title; card.appendChild(store); } } });
