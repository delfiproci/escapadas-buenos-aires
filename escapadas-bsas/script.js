// Función 1: Mostrar mensaje de bienvenida con alert
function mostrarAlerta() {
    alert("¡Gracias por visitar nuestra guía de escapadas!");
  }
  
  // Función 2: Cambiar el color de fondo del sitio
  function cambiarFondo() {
    document.body.style.backgroundColor = "#e3f2fd"; // azul claro
  }  

  // Función 3: Ocultar o mostrar la imagen
function toggleImagen() {
    const imagen = document.getElementById("imagenEscapada");
  
    if (imagen.style.display === "none") {
      imagen.style.display = "block";
    } else {
      imagen.style.display = "none";
    }
  }  