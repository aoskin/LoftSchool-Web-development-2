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
    //Burgers icon-list
    const burgerIcon = document.querySelector('.burgers__icon-wrap');

    burgerIcon.addEventListener('click', function() {
      burgerIcon.classList.toggle("burgers__icon-wrap--active");
    });
      //Form 

      const form = document.querySelector('#order');
      const submit = document.querySelector('#submit');
      
      submit.addEventListener('click', function(e) {
        e.preventDefault();

        console.log(form.elements);


        if (validateForm(form)) {
          console.log('все ок');
        }
      });

      function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
          valid = false;
        }

        if (!validateField(form.elements.phone)) {
          valid = false;
        }

        if (!validateField(form.elements.comment)) {
          valid = false;
      }
    }
 //Hamburger
 const hamburger = document.querySelector('.hamburger');

 hamburger.addEventListener('click', function() {
 hamburger.classList.toggle("hamburger--active");
 });

//Overlay
const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function() {
  overlay.open();
  overlay.setContent('123');
});

function createOverlay(template) {
  let fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".content");
  const closeElement = fragment.querySelector(".close");
  
  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  closeElement.addEventListener("click", () => {
    document.body.removeChild(overlayElement);
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    }
  };
}

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