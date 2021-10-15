const mostrarEventos = async () => {
    let contenido = document.getElementById("contenido");
    let eventos = await getEventos();
    eventos.forEach(async element => {
        firebase.auth().onAuthStateChanged((user) => {
            user=user.uid
            let datos = element.data();
            contenido.innerHTML += `
        <center>
            <div>
            <br><hr><br>
                <img src="${datos.urlFoto}">
                <div>
                    <h3>Nombre del evento: ${datos.nombre}</h3>
                    <h3>informacion del evento: ${datos.informacion}</h3>
                    <h3>fecha del evento: ${datos.fecha}</h3>
                    <button id="${element.id}/${user}" class="btn btn-secondary" onclick="confirmarAsistencia(this)">Asistir</button>
                </div>
            <br><hr><br>
            </div>
        </center>
        `;
        })

    });
}
mostrarEventos();