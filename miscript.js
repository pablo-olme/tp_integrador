document.getElementById("boton").onclick = function () {

    let nombre = document.getElementById ("interesado").value;
    let empresa = document.getElementById ("empresa").value;
    let telefono = document.getElementById ("telefono").value;
    let correo = document.getElementById ("correo").value;
    let comentarios = document.getElementById ("observaciones").value;
    let expresion = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        } 

    if (nombre === "" || empresa === "" || telefono === "" || correo === "" || comentarios ==="" ) {
    alert ("Todos los campos son obligatorios")
    return false;
    }
else if (nombre.length>15) {
    alert ("El nombre es muy largo")
    return false;
    }
else if (!expresion.nombre.test(nombre)){
    alert ("Ingrese un nombre con letras únicamente")
    return false;
    }
else if (empresa.length>30) {
    alert ("El nombre de la empresa es muy largo")
    return false;
    }
else if (telefono.length>20) {
    alert ("El teléfono es muy largo")
    return false;
    }
else if (isNaN(telefono)) {
    alert ("Ingrese solo números como teléfono")
    return false;
    }
else if (correo.length>30) {
    alert ("El correo es muy largo")
    return false;
    }
else if (!expresion.correo.test(correo)){
    alert ("El correo ingresado no es válido")
    return false;
    }
else if (comentarios.length>150) {
    alert ("Por favor, en los comentarios no ingrese mas de 1000 carácteres")
    return false;
    }   
    window.alert ("Muchas gracias por escribir, pronto nos pondremos en contacto");
}