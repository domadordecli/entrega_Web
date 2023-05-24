// Obtén el elemento del botón por su id
var boton = document.getElementById("cambiarColorBtn");

// Agrega un evento de clic al botón
boton.addEventListener("click", cambiarColor);

// Función para cambiar el color de las letras de la página
function cambiarColor() {
  // Genera un color aleatorio en formato hexadecimal
  var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  // Obtén todos los elementos de texto en la página
  var elementosTexto = document.querySelectorAll("body *:not(script)");

  // Itera sobre los elementos y cambia el color de las letras
  elementosTexto.forEach(function(elemento) {
    elemento.style.color = color;
  });
}





$(function() {

  $('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
   $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});
$('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
   $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

});
