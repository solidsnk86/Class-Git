// Ejercicio número 1 (Buscar números pares o impares)
var num1 = 3;
var num2 = 6;
var num3 = 9;

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El número ${num} es Par.`);
  } else {
    console.log(`El número ${num} es Impar.`);
  }
}

parImpar(num1);

// Ejercicio número 2 (Verificar si es mayor de edad)
var miEdad = 38;
const mayor = 18;

function mayorDeEdad(edad) {
  if (edad >= mayor) {
    console.log(`Usted tiene ${edad}, es mayor de edad.`);
  } else {
    console.log(`Usted tiene ${edad}, no es mayor de edad.`);
  }
}

mayorDeEdad(miEdad);