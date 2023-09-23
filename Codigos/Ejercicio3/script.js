(function a(){
    var x=1;
    let y=2;
    const n=0;
    y = y+3;
    const oe ="Que miras oe";
    console.log(oe);
})();




function cambiarUImagen(){
    const imagen = document.getElementById("imagen").src;
    //const achivo = imagen == "Imagen.jfif" ? "Imagen wide.png" :"Imagen.jfif";
    //ya me malogro el profe la funcion csm
    //ya ta arreglado ya

    if(imagen ==="file:///C:/Temp/ProgWeb/Codigos/Ejercicio3/Imagen.jfif"){
        document.getElementById("imagen").src = "file:///C:/Temp/ProgWeb/Codigos/Ejercicio3/Imagen wide.png";
    } else {
        document.getElementById("imagen").src ="file:///C:/Temp/ProgWeb/Codigos/Ejercicio3/Imagen.jfif";
    }
}