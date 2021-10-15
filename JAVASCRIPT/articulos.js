const cargarArticulos = async () => {
    let Articulos = await getArticulos();
    let contenido = document.getElementById("contenido");
    Articulos.forEach(element => {
        let datos = element.data();
        contenido.innerHTML+=`<center>
        <div class=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4"> 

        <div class="col d-flex justify-content-center mb-4">
          <div class=" bg-info bg-opacity-10 rounded border border-info" style="width: 20rem;">
            <h5 class="card-title pt-2 text-center text-primary">${datos.nombre}</h5>
            <img src="${datos.urlFoto}" class="card-img-top text-dark" width=20>
            <div class="card-body">
              <p class="card-text text-dark description">${datos.informacion}</p>
              
              <div class="d-grid gap-2">
              
            </div>
            </div>
          </div>
        </div>
        </center>
        `
    });
}
cargarArticulos();