//Accordion
const accordion = document.querySelectorAll('.accordion__card');
const accordionVertical = document.querySelectorAll('.accordion-vertical__card');
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle("accordion__card--active");
  });
};

for (i = 0; i < accordionVertical.length; i++) {
  accordionVertical[i].addEventListener('click', function() {
    this.classList.toggle("accordion-vertical__card--active");
  });
};