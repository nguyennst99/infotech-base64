function convertToBase64() {
   const fileInput = document.getElementById('imageInput');
   const file = fileInput.files[0];
   const reader = new FileReader();

   reader.onloadend = function () {
      const base64String = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      document.getElementById('base64Output').innerText = base64String;

      const downloadLink = document.createElement('a');
      downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(base64String);
      downloadLink.download = 'base64_encoded.txt';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
   };

   if (file) {
      reader.readAsDataURL(file);
   } else {
      document.getElementById('base64Output').innerText = 'No file selected.';
   }
}