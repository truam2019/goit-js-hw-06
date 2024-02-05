 // Obtener elementos del DOM
 const decrementButton = document.querySelector('[data-action="decrement"]');
 const incrementButton = document.querySelector('[data-action="increment"]');
 const valueSpan = document.getElementById('value');

 // Inicializar el contador
 let counterValue = 0;

 // Función para actualizar el valor y la interfaz
 function updateCounter(action) {
   if (action === 'increment') {
     counterValue += 1;
   } else if (action === 'decrement') {
     counterValue -= 1;
   }

   // Actualizar el valor en la interfaz
   valueSpan.textContent = counterValue;
 }

 // Añadir escuchadores de clic a los botones
 decrementButton.addEventListener('click', () => updateCounter('decrement'));
 incrementButton.addEventListener('click', () => updateCounter('increment'));
 