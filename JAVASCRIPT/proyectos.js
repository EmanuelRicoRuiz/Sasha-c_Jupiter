const mostrarProyectos = async () => {
  let contenido = document.getElementById("container");
  let proyectos = await getProyectos();
  proyectos.forEach(async element => {
    let datos = element.data();
    let categoria = await getCategoria(datos.categoria)
    categoria = categoria.data();
    contenido.innerHTML += `
              <div id="proyecto${element.id}" class="proyectoMain">
                <center>
                  <div class="imgProyecto">
                    <img width=200 src=${datos.urlFoto} ><br>
                  </div>
                  ${categoria.nombre}<br>
                  ${datos.publico}<br><br>
                  <button id="${element.id}" onclick="verficha(this)" class="borderBoton btn btn-warning">${datos.nombre}</button>
                  <br><br>
                </center>
              </div>
            `;
    
  });
}
mostrarProyectos();


function agregarComentario(element) {
  let proyectoId = element.id;
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Finalizar comentario;',
    showCancelButton: true,
    progressSteps: ['1']
  }).queue([
    {
      title: 'Comentario',
      text: 'Ingresa tu comentario'
    }
  ]).then((result) => {
    if (result.value) {
      let comentario = result.value;
      db.collection("comentarios").doc().set({
        comentario,
        proyectoId
      })
      Swal.fire({
        title: '¡Comentario Registrado!',
        html:
          'Tu comentario es: <pre><code>' +
          result.value +
          '</code></pre>',
        confirmButtonText: 'Ok'

      })
    }
  });
}

