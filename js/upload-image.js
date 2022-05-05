export let uploadImage = () => {
    
    let chooseFiles = document.querySelectorAll('.choose-file');    

    chooseFiles.forEach(chooseFile => {

        chooseFile.addEventListener("change", function() {

            let files = chooseFile.files[0]
            let fileReader = new FileReader();

            fileReader.readAsDataURL(files);
            
            fileReader.addEventListener("load", function () {
                console.log(fileReader.result);
                chooseFile.closest('.image-selector').querySelector('.image-preview-element').src = fileReader.result;
                chooseFile.closest('.image-selector').querySelector('.image-preview-svg').classList.add('hidden');
                chooseFile.closest('.image-selector').querySelector('.image-preview-delete').classList.add('active');

            });
        });
    });












//     let upload = document.getElementsByClassName(".fileUpload");

//     function archivo(evt) {
//         var files = evt.target.files; // FileList object
        
//           //Obtenemos la imagen del campo "file". 
//         for (var i = 0, f; f = files[i]; i++) {         
//              //Solo admitimos imágenes.
//              if (!f.type.match('image.*')) {
//                   continue;
//              }
         
//              var reader = new FileReader();
             
//              reader.onload = (function(theFile) {
//                  return function(e) {
//                  // Creamos la imagen.
//                         document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
//                  };
//              })(f);
   
//              reader.readAsDataURL(f);
//          }
//   }
               
//         document.getElementById('files').addEventListener('change', archivo, false, function(){
//             upload.classList.add("active");
//         });
        

}
    

