window.onload = function() {
    document.getElementById('Uno').style.display = "block";
};
//FUNCION PARA ABRIR botones
function abrirTab(evt, tabSeleccionado) {
    var i, contenido, boton;
    contenido = document.getElementsByClassName("contenido"); //obteniene todos los divs con la clase contenido
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none"; //Oculta todos los divs
    }
    boton = document.getElementsByClassName("boton"); //obteniene todos los botones con la clase boton
    for (i = 0; i < boton.length; i++) {
        boton[i].className = boton[i].className.replace(" active", ""); //remueve la clase "active" a todos
    }
    document.getElementById(tabSeleccionado).style.display = "block"; // obtiene el div a mostrar por el id y lo muestra con la propiedad display block
    evt.currentTarget.className += " active"; //inserta la clase active al boton
}