document.getElementById('fileInput').addEventListener('change', handleFileSelect);
let fileSelected;

function handleFileSelect(event) {
   const fileName = event.target.files[0].name;
   document.querySelector('.custom-file-upload').innerText = fileName;
   fileSelected = fileName;
}

function convertToBase64() {
   const fileInput = document.getElementById('fileInput');
   const file = fileInput.files[0];
   const reader = new FileReader();

   reader.onloadend = function () {
      const base64String = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

      const downloadLink = document.createElement('a');
      downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(base64String);
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