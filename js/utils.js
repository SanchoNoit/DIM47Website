function init(){



}


function listaContents(){

};


function listaAsignatura(asignatura){
  const fs = require("fs");
  const path = require("path");
  try{
    var ls=fs.readdirSync(asignatura);
       
    for(let index = 0; index < ls.length; index++){
       // con ls[index] crear lista.
        var div = document.createElemnt("div");
        div.class = asignatura;
        div.class = asignatura;
        var h2 = div.createElemnt("h2");
        var filename = ls[index].filename;
         h2.value= asignatura;

        listaFicheros(filename, div);
      

       
    }


  }catch(e){
    //do something
  }
}


function listaFicheros(filename, div){
    const fs = require("fs");
    try{
        var ls=fs.readdirSync(filename);
        var ul = div.createElement("ul");
        for(let index = 0; index < ls.length; index++){
            // con ls[index] crear lista.
             var div = ul.createElemnt("li");
             ul.createElement("a").href=ls[index].filename; //comprobar que devuelve ls
             ul.content = ls[index]-filename;
             
             
     
             listaFicheros(filename, div);
           
     
            
         }
    }
    catch(e){

    }
};

//<div class="asignatura">
//            <h2>Unidad 1: Introducción</h2>
//            <a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/20240902 Guia Docente Algoritmos y estructura de datos_2024_25.pdf">Guía didáctica</a>
//            <ul>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción//TEMA 1-Repaso.pdf">Introducción a los algoritmos</a></li>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/Porgramación estructurada.pdf">Extracto de progamación estructurada</a></li>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/Ejercicios 1.pdf">Ejercicios UD1</a></li>
//            </ul>
//        </div>


window.addEventListener('load', function(){
    init();
});