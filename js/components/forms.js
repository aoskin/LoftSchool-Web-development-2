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