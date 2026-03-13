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
let boton = document.getElementById("btnColor");

boton.addEventListener("click", function(){
document.body.style.backgroundColor = "lightblue";
});


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

//Ejercicio 7
let numero = Number(prompt("Ingresa un numero"));

let esPrimo = true;
let suma = 0;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        suma += i;
    }
}

let esPerfecto = (suma === numero);
if (esPrimo && esPerfecto) {
    alert("El número es primo y perfecto");
} else if (esPrimo) {
    alert("El número es primo");
} else if (esPerfecto) {
    alert("El número es perfecto");
} else {
    alert("El número no es primo ni perfecto");
}

//ejercicio 8
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(){
    console.log("El boton fue clickeado")
});