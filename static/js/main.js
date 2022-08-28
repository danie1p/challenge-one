
var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnCopiarTexto = document.querySelector("#btnCopiarTexto");

function mostrarResultado(textoAMostrar) {

    var textoResultado = document.querySelector("#texto-resultado");
    textoResultado.textContent = textoAMostrar;

}

function encriptar() {
 
    var txtArea = document.querySelector("#txt");
    var txtAEncriptar = txtArea.value;
    var txtEncriptado = "";
    
    txtEncriptado = txtAEncriptar.replaceAll("e", "enter");
    txtEncriptado = txtEncriptado.replaceAll("i", "imes");
    txtEncriptado = txtEncriptado.replaceAll("a", "ai");
    txtEncriptado = txtEncriptado.replaceAll("o", "ober");
    txtEncriptado = txtEncriptado.replaceAll("u", "ufat");

    console.log(txtEncriptado);
    mostrarResultado(txtEncriptado);

    return txtEncriptado;

}

function desencriptar() {

    var txtArea = document.querySelector("#txt");
    var txtADesencriptar = txtArea.value;
    var txtDescenpcriptado = "";

    txtDescenpcriptado = txtADesencriptar.replaceAll("enter", "e");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("imes", "i");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ai", "a");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ober", "o");
    txtDescenpcriptado = txtDescenpcriptado.replaceAll("ufat", "u");

    console.log(txtDescenpcriptado);
    mostrarResultado(txtDescenpcriptado);
    
    return txtDescenpcriptado;

}

function copiarTexto() {

    var textoResultado = document.querySelector("#texto-resultado").innerText;
    navigator.clipboard.writeText(textoResultado).then(accepted => {

        console.log("Copiado al portapapeles");

    }, rejected => {

        console.log("No se pudo copiar al portapapeles");

    });

}


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiarTexto.addEventListener("click", copiarTexto);
