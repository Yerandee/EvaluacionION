//Referencia de la tabla del html y el estilo de imagen conforme a sus IDs.
var table = document.getElementById("myTable");
var image = document.getElementById("movableImage");

// Inicio el movimiento y guardo en la variable.
var interval = iniciarMovimiento();

// función que inicia el movimiento.
function iniciarMovimiento() {
    // Verifica si la imagen ya existe en la tabla y la elimina si es así.
    if (image) {
        table.rows[0].cells[0].removeChild(image);
    }

    // Crea una nueva imagen con una URL la agrego a la primera celda de la tabla.
    image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1601328304088-9d9f798edc6a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.id = "movableImage";
    table.rows[0].cells[0].appendChild(image);

    // Inicializo el objeto que representa la posición actual de la imagen en la tabla.
    var position = { row: 0, cell: 0 };

    // el intervalo me va a funcionar para darle un tiempo al movimiento de la imagen 
    var id = setInterval(function moveImage() {
        // Elimino la imagen de la celda actual.
        table.rows[position.row].cells[position.cell].removeChild(image);
        
        // Incremento la posición.
        position.cell++;

        // Verifico si se alcanzo el final de la fila actual.
        if (position.cell >= table.rows[position.row].cells.length) {
            // Reinicio la posición a la primera celda y paso a la siguiente fila.
            position.cell = 0;
            position.row++;

            // Si se alcanzo el final de la tabla, reinicio a la primera fila.
            if (position.row >= table.rows.length) {
                position.row = 0;
            }
        }

        // Agrego la imagen a la nueva posición.
        table.rows[position.row].cells[position.cell].appendChild(image);
    }, 1000);

    // Retorna el id para poder pausarlo.
    return id;
}

// Función para reiniciar 
function reiniciarMovimiento() {
    //Detengo el intervalo y regreso la imagen en la posición inicial para poder volver a iniciar.
    clearInterval(interval);
    table.rows[0].cells[0].appendChild(image);
}
