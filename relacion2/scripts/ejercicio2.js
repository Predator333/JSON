const boton = document.querySelector("#añadir");
const lista = document.querySelector("#listaTareas");

boton.addEventListener("click", function() {

    const texto = prompt("Escribe tu nueva tarea:");

    if(texto && texto.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);
    }
}
);