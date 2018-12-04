//Accordion

const accordElement = document.querySelector('#accordion');
const accordElementVertical = document.querySelector('#accordion-vertical');

  createAccord(accordElement);

  function createAccord(element) {
    const headers = element.querySelectorAll('.accordion__head');
    let activeContent;

    for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    header.addEventListener('click', function(e) {
      if (activeContent) {
        activeContent.classList.remove('accordion__body--active');
      }
        activeContent = header.nextElementSibling;
        activeContent.classList.add('accordion__body--active');
      });
    }
  }

  createAccordVertical(accordElementVertical);

  function createAccordVertical(element) {
    const headers = element.querySelectorAll('.accordion-vertical__head');
    let activeContentV;

    for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    header.addEventListener('click', function(e) {
      if (activeContentV) {
        activeContentV.classList.remove('accordion-vertical__body--active');
      }
        activeContentV = header.nextElementSibling;
        activeContentV.classList.add('accordion-vertical__body--active');
      });
    }
  }
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

 hamburger.addEventListener('click', function(e) {
 hamburger.classList.toggle("hamburger--active");
 });

//Overlay

const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function() {
  overlay.open();
  overlay.setContent("Спасибо, данные сохранены");
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