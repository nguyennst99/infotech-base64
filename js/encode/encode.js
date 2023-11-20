function convertToBase64() {
   const textInput = document.getElementById('text-input');
   const outputDiv = document.getElementById('output');

   const inputValue = textInput.value.trim();

   if (inputValue) {
      const base64Content = btoa(inputValue);
      const textArea = document.createElement('textarea');
      textArea.rows = '20';
      textArea.cols = '50';
      textArea.value = base64Content;

      outputDiv.appendChild(textArea);
   } else {
      outputDiv.textContent = 'Please enter text to encode.';
   }
}