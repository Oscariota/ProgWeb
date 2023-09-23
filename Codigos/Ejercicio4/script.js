let sumando2 =0;


function sumar(){
    const sumando = document.getElementById("txtbox").value;
    const resultado = parseInt(sumando) + parseInt(sumando2);
    document.getElementById("res").innerHTML = resultado;
    sumando2 = resultado;

}