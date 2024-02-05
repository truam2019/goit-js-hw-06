 // Obtener el elemento del input
 const validationInput = document.getElementById('validation-input');

 // Añadir escuchador de evento blur al input
 validationInput.addEventListener('blur', validateInput);

 // Función para validar el número de símbolos
 function validateInput() {
   // Obtener el valor del input
   const inputValue = validationInput.value.trim();

   // Obtener la longitud deseada desde el atributo data-length
   const desiredLength = parseInt(validationInput.getAttribute('data-length'));

   // Añadir o quitar clases según si la longitud es correcta
   if (inputValue.length === desiredLength) {
     validationInput.classList.remove('invalid');
     validationInput.classList.add('valid');
   } else {
     validationInput.classList.remove('valid');
     validationInput.classList.add('invalid');
   }
 }