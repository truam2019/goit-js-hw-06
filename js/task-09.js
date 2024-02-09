function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const color = document.querySelector('span.color')
const colorChangerButton = document.querySelector('button.change-color');

colorChangerButton.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})
