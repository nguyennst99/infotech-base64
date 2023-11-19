document.getElementById('fileInput').addEventListener('change', handleFileSelect);
let fileSelected;

function handleFileSelect(event) {
   const fileName = event.target.files[0].name;
   document.getElementById('fileInputLabel').innerText = `Selected File: ${fileName}`;
   fileSelected = fileName;
}

function convertToBase64() {
   const fileInput = document.getElementById('fileInput');
   const file = fileInput.files[0];
   const reader = new FileReader();

   reader.onloadend = function () {
      const base64String = reader.result.split(',')[1];

      const downloadLink = document.createElement('a');
      downloadLink.href = 'data:text/plain;charset=utf-8,' + base64String;
      downloadLink.download = fileSelected + '.txt';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
   };

   if (file) {
      reader.readAsDataURL(file);
   }
}