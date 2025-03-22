# escapadas-buenos-aires
# Escapadas de fin de semana cerca de Buenos Aires 🧳🌿

Este es un proyecto realizado para la materia **Contenidos y Creatividad III**, como parte del primer trabajo práctico del cuatrimestre.  
El objetivo fue repasar y aplicar conocimientos de HTML, CSS y JavaScript, y publicar un sitio web estático en GitHub Pages.

## 🌐 Sitio publicado
Podés ver el sitio online en este enlace:  
➡️ [https://TU_USUARIO.github.io/escapadas-buenos-aires/](https://TU_USUARIO.github.io/escapadas-buenos-aires/)  
(Reemplazá "TU_USUARIO" con tu nombre de usuario real en GitHub)

## 📁 Estructura del proyecto
- `index.html`: Página principal del sitio.
- `styles.css`: Archivo con los estilos CSS.
- `script.js`: Archivo con la funcionalidad en JavaScript.
- `/assets`: Carpeta que contiene las imágenes utilizadas.

## 📜 Instrucciones para visualizar el sitio en GitHub Pages
1. Acceder al link proporcionado arriba.
2. El sitio se carga automáticamente desde el archivo `index.html` ubicado en la raíz del repositorio.
3. No se requiere instalación de ningún software adicional.

## 💡 Función JavaScript implementada
Se incluyó una función interactiva que permite cambiar el color de fondo del sitio al hacer clic en un botón.  
Esta función está vinculada al evento `onclick` del botón ubicado debajo de los artículos principales.

### ¿Cómo funciona?
- Al hacer clic en el botón "Cambiar fondo", se ejecuta una función llamada `cambiarFondo()`.
- Esta función selecciona un color al azar de una lista y lo aplica como nuevo color de fondo al sitio.
- Permite darle un toque dinámico a la navegación del usuario.

Código utilizado (en `script.js`):

```javascript
function cambiarFondo() {
  const colores = ['#F0EAD6', '#E8F6EF', '#FFF8DC', '#FCE4EC', '#D1F2EB'];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}
