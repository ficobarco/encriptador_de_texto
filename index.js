function encriptar() {

  var texto = document.getElementById("inputText").value;
  var textoEncriptado = texto.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
  document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {

  var textoEncriptado = document.getElementById("inputText").value;
  var texto = textoEncriptado.replace(/ufat/g, "u")
                             .replace(/ober/g, "o")
                             .replace(/ai/g, "a")
                             .replace(/imes/g, "i")
                             .replace(/enter/g, "e");

  document.getElementById("outputText").value = texto;
}

/*function mostrarGif() {
  var gifContainer = document.getElementById("gifContainer");
  gifContainer.style.display = "block";
  setTimeout(function() {
      gifContainer.style.display = "none";
  }, 3000);
}*/

function copiarTexto() {
  var texto = document.getElementById("outputText");
  texto.select();
  document.execCommand("copy");
  document.getElementById("inputText").value = "";
}
function limpiarPantalla() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}