const mostrarProyectos = async () => {
    let contenido = document.getElementById("contenido");
    let proyectos = await getProyectos();
    proyectos.forEach(async element => {
            
            
            let datos = element.data();
            let categoria=await getCategoria(datos.categoria)
            categoria=categoria.data();
            contenido.innerHTML += `
        <center>
        <main>
		<div class="proyecto">
        <img width=900 id="imgProyecto" src="${datos.urlFoto}">
			<div class="contenedor">
				<h3 class="titulo">${datos.nombre}</h3>
				<p class="descripcion">
					${datos.descripcion}
				</p>
                <p class="descripcion">
					${categoria.nombre}
				</p>

                <button onclick="agregarComentario(this)" id="${element.id}" class="btn btn-info btn-lg btn-block">Agregar Comentario</button>

				
				
			</div>
		</div>
	</main>
        </center>
        `;
        

    });
}
mostrarProyectos();


function agregarComentario(element) {
  let proyectoId=element.id;
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
    
  