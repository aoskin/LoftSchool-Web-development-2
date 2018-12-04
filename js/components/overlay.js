
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
