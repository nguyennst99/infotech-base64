function decodeBase64() {
   const base64Input = document.getElementById('text-input');
   const outputDiv = document.getElementById('output');

   const inputValue = base64Input.value.trim();

   if (inputValue) {
      try {
         const decodedContent = atob(inputValue);

         const textArea = document.createElement('textarea');
         textArea.rows = '20';
         textArea.cols = '50';
         textArea.value = decodedContent;

         outputDiv.appendChild(textArea);
      } catch (error) {
         outputDiv.textContent = 'Invalid Base64 string';
      }
   } else {
      outputDiv.textContent = 'Please enter a Base64 string.';
   }
}