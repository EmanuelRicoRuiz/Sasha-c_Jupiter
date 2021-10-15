const mostrarEspacios = async () => {
    let contenido = document.getElementById("container");
    let espacios = await getEspacios();
    espacios.forEach(async element => {
            
            
            let datos = element.data();
            let categoria=await getCategoria(datos.categoria)
            categoria=categoria.data();
            contenido.innerHTML += `
            <div id="proyecto${element.id}" class="proyectoMain">
            <center>
              <div class="imgProyecto">
                <img width=200 src=${datos.urlFoto} ><br>
              </div>
              ${categoria.nombre}<br>
              ${datos.descripcion}<br><br>
              <button class="borderBoton btn btn-warning">${datos.nombre}</button>
              <br><br>
            </center>
          </div>
        `;
        

    });
}
mostrarEspacios();