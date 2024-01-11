function genPDF(rutaImagen) {
  let doc = new jsPDF();

  let pageWidth = doc.internal.pageSize.width;
  let pageHeight = doc.internal.pageSize.height;

  let img = new Image();

  img.onload = function () {
    let aspectRatio = img.width / img.height;

    let imageWidth = pageWidth - 10; 
    let imageHeight = imageWidth / aspectRatio;

    if (imageHeight > pageHeight - 10) {
      imageHeight = pageHeight - 10;
      imageWidth = imageHeight * aspectRatio;
    }
 
    let x = (pageWidth - imageWidth) / 2;
    let y = (pageHeight - imageHeight) / 2;
   
    doc.addImage(img, 'JPG', x, y, imageWidth, imageHeight);

    let blob = doc.output('blob');

    let pdfUrl = URL.createObjectURL(blob);

    window.open(pdfUrl, '_blank');

    setTimeout(function () {
      URL.revokeObjectURL(pdfUrl);
    }, 5000); 
  };

  img.src = rutaImagen;
}
