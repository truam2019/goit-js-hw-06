function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes() {
  const amount = parseInt(document.querySelector('input').value);
  const boxesContainer = document.getElementById('boxes');

  // Clear existing boxes
  destroyBoxes();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
