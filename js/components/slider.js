 //Slider
 const left = document.querySelector("#slide-left");
 const right = document.querySelector("#slide-right");
 const items = document.querySelector(".burgers__inner");

 const minRight = 0;
 const maxRight = 200;
 const step = 100;
 let currentRight = 0;

 items.style.right = currentRight + "%";

 right.addEventListener("click", function(e) {
 e.preventDefault();
 if (currentRight < maxRight) {
 currentRight += step;
 }
 else {
   currentRight = 0;
 }
 
 items.style.right = currentRight + "%";
 });

 left.addEventListener("click", function(e) {
 e.preventDefault();
 if (currentRight > minRight) {
 currentRight -= step;
 }
 else {
 currentRight = maxRight;
 }

 items.style.right = currentRight + "%";

 });