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