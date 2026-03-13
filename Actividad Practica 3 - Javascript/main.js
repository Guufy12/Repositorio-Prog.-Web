//Ejercicio 1
const nombre = "Carlos";
let edad = 22;
var ciudad = "Villa Altagracia";

console.log("Me llamo " + nombre + " tengo " + edad+ " de edad y vivo en "+ ciudad);

//Ejercicio 2
let numeroIngresado = prompt("Por favor, Ingresa un numero: ");
let doble = numeroIngresado * 2;
alert("El doble de: " +numeroIngresado+" es: "+doble);

//ejercicio 3
function Sumar(valor1, valor2){
let resultado = valor1 + valor2;

return resultado
}

let sumatoria = Sumar(12, 13)
console.log("El resultado de la suma es: "+sumatoria)

//ejercicio 4
/*let boton = getElementById("btnColor");

boton.addEventListener("click", function(){
document.body.style.backgroundColor = "blue";
});
*/
//Ejercicio 5 
for (let i = 1; i <= 1000; i++) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
        }
    }

    if (esPrimo) {
        console.log(i);
    }
}

//Ejercicio 6
function NumPerfecto(numero){
    let suma = 0;

    for(let i = 1; i < numero; i++){
        if(numero % i === 0){
            suma += i;
        }
    }

    if(suma === numero){
        return true;
    } else {
        return false;
    }
}

console.log(NumPerfecto(6))