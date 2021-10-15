var urlFoto;
const RegistrarDatosProyecto=async ()=>{
  Swal.fire({
    position: 'top-end',
    title: 'Guardando proyecto',
    showConfirmButton: false,
  })
    event.preventDefault()
    let nombre=document.getElementById("nombreproyecto").value
    let categoria =document.getElementById("Categoria").value;
    let descripcion=document.getElementById("DescripcionProyecto").value;
    db.collection("proyectos").doc().set({nombre,categoria,descripcion,urlFoto});
    urlFoto=undefined
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Proyecto guardado',
      showConfirmButton: false,
      timer: 1500
    })

}
const RegistrarDatosEspacio=async ()=>{
  Swal.fire({
    position: 'top-end',
    title: 'Guardando espacio',
    showConfirmButton: false,
  })
    event.preventDefault()
    let nombre=document.getElementById("nombreEspacio").value
    let categoria =document.getElementById("Categoria").value;
    let descripcion=document.getElementById("DescripcionEspacio").value;
    db.collection("espacios").doc().set({nombre,categoria,descripcion,urlFoto});
    urlFoto=undefined
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Espacio guardado',
      showConfirmButton: false,
      timer: 1500
    })
}
const RegistrarDatosArticulo=async ()=>{
  Swal.fire({
    position: 'top-end',
    title: 'Guardando articulo',
    showConfirmButton: false,
  })
    event.preventDefault()
    let nombre=document.getElementById("nombreArticulo").value
    let informacion=document.getElementById("informacionArticulo").value;
    db.collection("articulos").doc().set({nombre,informacion,urlFoto});
    urlFoto=undefined
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Articulo guardado',
      showConfirmButton: false,
      timer: 1500
    })
}
const RegistrarDatosCategoria=async ()=>{
  Swal.fire({
    position: 'top-end',
    title: 'Guardando categoria',
    showConfirmButton: false,
  })
    event.preventDefault()
    let nombre=document.getElementById("nombreCategoria").value
    db.collection("categorias").doc().set({nombre});
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Categoría guardada',
      showConfirmButton: false,
      timer: 1500
    })
}
const RegistrarDatosEvento=async ()=>{
  Swal.fire({
    position: 'top-end',
    title: 'Guardando evento',
    showConfirmButton: false,
  })
    event.preventDefault()
    let nombre=document.getElementById("nombreevento").value
    let informacion=document.getElementById("informacionevento").value;
    let fecha=document.getElementById("fechaEvento").value;
    console.log(fecha)
    db.collection("eventos").doc().set({nombre,informacion,fecha,urlFoto});
    urlFoto=undefined
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Evento guardado',
      showConfirmButton: false,
      timer: 1500
    })
}
async function uploadImage() {
  Swal.fire({
    position: 'top-end',
    title: 'Guardando Imagen',
    showConfirmButton: false,
    
  })
    event.preventDefault();
    try {
      
      let file = document.getElementById('photo').files[0];
      var hoy = new Date();
      hora = hoy.getHours() + ':' + hoy.getSeconds() + ':' + hoy.getMinutes();
      horaFecha = hoy.getDate() + ':' + (hoy.getMonth() + 1) + ':' + hoy.getFullYear() + ':' + hora;
      const name = file.name + ':' + horaFecha;
      if (file == null) {
       
      } else {
        const metadata = {
          contentType: file.type
        }
        const task = ref.child(name).put(file, metadata);
       
        task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {

            urlFoto=url
            console.log(urlFoto)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Imagen guardada',
              showConfirmButton: false,
              timer: 1500
            })
          });
          
  
      }
    } catch (E){
      console.log(E)
    }
  
  }

  const RegistrarDatosEncuesta=()=>{
    Swal.fire({
      position: 'top-end',
      
      title: 'Guardando encuesta',
      showConfirmButton: false,
      
    })
    event.preventDefault();
    let pregunta=document.getElementById("pregunta").value;
    let respuesta1=document.getElementById("respuesta1").value;
    let categoriaRespuesta1=document.getElementById("Categoria1").value
    let respuesta2=document.getElementById("respuesta2").value;
    let categoriaRespuesta2=document.getElementById("Categoria2").value
    let numeroEncuesta=document.getElementById("numeroEncuesta").value;
    db.collection("encuesta").doc().set({
      pregunta,
      respuesta1,
      categoriaRespuesta1,
      respuesta2,
      categoriaRespuesta2,
      numeroEncuesta
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Encuesta guardada',
      showConfirmButton: false,
      timer: 1500
    })
  }