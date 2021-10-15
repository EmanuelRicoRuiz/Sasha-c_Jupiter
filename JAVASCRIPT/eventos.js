const mostrarEventos = async () => {
    let contenido = document.getElementById("container");
    let eventos = await getEventos();
    eventos.forEach(async element => {
        firebase.auth().onAuthStateChanged((user) => {
            user=user.uid
            let datos = element.data();
            contenido.innerHTML += `
            <div id="proyecto${element.id}" class="proyectoMain">
              <center>
                <div class="imgProyecto">
                  <img width=200 src=${datos.urlFoto} ><br>
                </div>
                ${datos.nombre}<br>
                ${datos.informacion}<br><br>
                ${datos.fecha}<br><br>
                <button class="borderBoton btn btn-warning">Asistir</button>
                <br><br>
              </center>
            </div>
          `;
        })

    });
}
mostrarEventos();