
import * as fs from 'fs';

function lisataContents(){
    var path = "Contents"
    var ls = readdirSync(path);
    for (let index = 0; index < ls.length; index++) {
        var element = ls[index];
        listaAsignatura(element);
    }
};


function listaAsignatura(asignaturaName){
    //var fs = require('fs');
    var ls = readdirSync(asignaturaName);
    var body = document.getElementsByName("body");
    var div = body.createElement("div");
    var a = div.createElement("a");
    for (let index = 0; index < ls.length; index++) {
        var element = ls[index];
        var h2 = div.createElement("h2");
        h2.value = element;
        var ul = div.createElement("ul");
        listaFicheros(element, ul);
    }

};

function listaFicheros(temaName, ul){
    //var fs = require('fs');
    var ls = readdirSync(temaName);
    for (let index = 0; index < ls.length; index++) {
        var element = ls[index];
        var li = ul.createElement("li");
        var a = li.createElement("a");
        a.value = element;
    }
}



//<div class="asignatura">
//            <h2>Unidad 1: Introducción</h2>
//            <a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/20240902 Guia Docente Algoritmos y estructura de datos_2024_25.pdf">Guía didáctica</a>
//            <ul>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción//TEMA 1-Repaso.pdf">Introducción a los algoritmos</a></li>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/Porgramación estructurada.pdf">Extracto de progamación estructurada</a></li>
//                <li><a href="Contents/Algorimos_y_Estructuras_de_datos/UD1:Introducción/Ejercicios 1.pdf">Ejercicios UD1</a></li>
//            </ul>
//        </div>
