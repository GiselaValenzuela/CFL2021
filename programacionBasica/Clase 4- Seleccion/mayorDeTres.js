let readlineSync = require(`readline-sync`);
let numeroUno = readlineSync.questionInt ("Ingrese el numero uno");
let numeroDos= readlineSync.questionInt ("Ingrese el numero dos");
let numeroTres = readlineSync.questionInt ("Ingrese el numero tres");
if (numeroUno >= numeroDos && numeroTres){
    console.log ("El primer numero es el mayor")
}
if (numeroDos >= numeroUno && numeroTres){
    console.log ("El segundo numero es el mayor")
}
if (numeroTres >= numeroDos && numeroTres){
    console.log ("El tercer numero es el mayor")
};