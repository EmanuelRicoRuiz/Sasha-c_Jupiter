const mostrarEspacios = async () => {
    let contenido = document.getElementById("contenido");
    let espacios = await getEspacios();
    espacios.forEach(async element => {
            
            
            let datos = element.data();
            let categoria=await getCategoria(datos.categoria)
            categoria=categoria.data();
            contenido.innerHTML += `
        <center>
            <div>
            <br><hr><br>
                <img src="${datos.urlFoto}">
                <div>
                    <h3>Nombre del espacio: ${datos.nombre}</h3>
                    <h3>Descripcion del espacio: ${datos.descripcion}</h3>
                    <h3>Categoría del espacio: ${categoria.nombre}</h3>
                    <button id="${element.id}/" class="btn btn-secondary" onclick="reservar(this)">Reservar</button>
                </div>
            <br><hr><br>
            </div>
        </center>
        `;
        

    });
}
mostrarEspacios();