var textInput = document.getElementById('text-input');
var textOutputBold = document.querySelector('.text-output .bold');
var textOutputItalic = document.querySelector('.text-output .italic');
var textOutputUnderline = document.querySelector('.text-output .underline');
textInput.addEventListener('input', function () {
    var text = textInput.value;
    // Target the text-styling properties of CSS using the DOM
    textOutputBold.style.fontWeight = 'bold';
    textOutputItalic.style.fontStyle = 'italic';
    textOutputUnderline.style.textDecoration = 'underline';
    // Display the text in three different styling properties in each individual div
    textOutputBold.textContent = text;
    textOutputItalic.textContent = text;
    textOutputUnderline.textContent = text;
});
