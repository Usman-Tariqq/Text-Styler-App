export{}
const textInput = document.getElementById('text-input') as HTMLInputElement;
const textOutputBold = document.querySelector('.text-output .bold') as HTMLDivElement;
const textOutputItalic = document.querySelector('.text-output .italic') as HTMLDivElement;
const textOutputUnderline = document.querySelector('.text-output .underline') as HTMLDivElement;

textInput.addEventListener('input', () => {
  const text = textInput.value;

  // Target the text-styling properties of CSS using the DOM
  textOutputBold.style.fontWeight = 'bold';
  textOutputItalic.style.fontStyle = 'italic';
  textOutputUnderline.style.textDecoration = 'underline';

  // Display the text in three different styling properties in each individual div
  textOutputBold.textContent = text;
  textOutputItalic.textContent = text;
  textOutputUnderline.textContent = text;
});