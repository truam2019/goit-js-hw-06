// Obtener elementos del DOM
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

// Añadir escuchador de eventos al input para detectar cambios
fontSizeControl.addEventListener('input', updateFontSize);

// Función para actualizar el tamaño de la fuente del span
function updateFontSize() {
  // Obtener el valor actual del deslizador
  const fontSizeValue = fontSizeControl.value;

  // Aplicar el estilo inline para cambiar el tamaño de la fuente
  textElement.style.fontSize = fontSizeValue + 'px';
}