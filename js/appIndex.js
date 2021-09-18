function dibujarCajas(){
    var num1=document.getElementById("n1").value;
    var color=document.getElementById("color-fondo").value;
    var borde=document.getElementById("bordes");
    var bordeSeleccionado = borde.options[borde.selectedIndex].text;
    document.getElementById("resultado").innerHTML=" ";
    if(!num1){
        var res="Completa los campos"
        document.getElementById("resultado").innerHTML=res;
    }else{
        for(var i=0; i<num1; i++){
            var elemento=document.createElement("div");
            elemento.style.backgroundColor=color;
            elemento.style.border="3px "+bordeSeleccionado;
            elemento.style.width="50px";
            elemento.style.height="50px";
            elemento.style.margin="5px";
            elemento.style.display="inline-block";
            document.getElementById("resultado").appendChild(elemento);
        }
    }
}

function encuestaPeliculas(){
    var pelicula=document.getElementById("pelicula");
    var peliculaSeleccionada=pelicula.options[pelicula.selectedIndex].text;
    var actor=document.getElementById("actor");
    var actorSeleccionado=actor.options[actor.selectedIndex].text;
    var genero=document.getElementById("genero");
    var generoSeleccionado=genero.options[genero.selectedIndex].text;
    var productora=document.getElementById("productora");
    var productoraSeleccionada=productora.options[productora.selectedIndex].text;
    var bandaSonora=document.getElementById("banda-sonora");
    var bandaSonoraSeleccionada=bandaSonora.options[bandaSonora.selectedIndex].text;

    if(peliculaSeleccionada==="Seleccione una" || actorSeleccionado==="Seleccione una" || generoSeleccionado==="Seleccione una" || productoraSeleccionada==="Seleccione una" || bandaSonoraSeleccionada==="Seleccione una"){
        var res="Complete todos los campos";
    }else{
        res="Película favorita: "+peliculaSeleccionada+"<br>Actor o actriz preferida: "+actorSeleccionado+
        "<br>Genero preferido: "+generoSeleccionado+"<br>Productora favorita: "+productoraSeleccionada+
        "<br>Mejor banda sonora: "+bandaSonoraSeleccionada;
    }

    document.getElementById("resultado").innerHTML=res;
}