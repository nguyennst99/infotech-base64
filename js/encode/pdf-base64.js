function convertToBase64() {
   const pdfInput = document.getElementById('pdfInput');

   if (pdfInput.files.length > 0) {
      const pdfFile = pdfInput.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
         const base64Content = e.target.result.split(',')[1];

         // Create a download link
         const downloadLink = document.createElement('a');
         downloadLink.href = 'data:text/plain;charset=utf-8,' + base64Content;
         downloadLink.download =   pdfFile.name + '.txt';
         downloadLink.style.display = 'none';

         // Append the link to the body and trigger the download
         document.body.appendChild(downloadLink);
         downloadLink.click();
         document.body.removeChild(downloadLink);
      };

      reader.readAsDataURL(pdfFile);
   }
}