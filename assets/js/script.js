//VALIDACION DE TARJETA

function validarTarjeta() {
    //NOS ASEGURAMOS QUE LA ALERTA NO SE MUESTRE
    let alerta =document.getElementById("alerta");

    //LIMPIAMOS TEXTO Y CLASE
    alerta.innerText ="";
    alerta.className ="";

    //OBTENEMOS EL NUMERO
    let numero = document.getElementById("numero-tarjeta");
    let digitosTc = numero.value
}