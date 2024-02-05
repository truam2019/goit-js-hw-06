 // Obtener elementos del DOM
 const nameInput = document.getElementById('name-input');
 const nameOutput = document.getElementById('name-output');

 // Añadir escuchador de evento input al input
 nameInput.addEventListener('input', updateName);

 // Función para actualizar el nombre en el span
 function updateName() {
   // Obtener el valor actual del input
   const inputValue = nameInput.value.trim();

   // Actualizar el contenido del span
   nameOutput.textContent = inputValue || 'Anonymous';
 }