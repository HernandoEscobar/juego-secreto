/* Crear una función que muestre "¡Hola, mundo!" en la consola. */

function saludar() {
  console.log("¡Hola, Mundo!");
  return;
}

saludar();

/* Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */

function saludar2(nombre) {
  console.log(`¡Hola, ${nombre}!`);
  return;
}

saludar2("Hernando");

/* Crear una función que reciba un número como parámetro y devuelva el doble de ese número. */

function numDoble(numero) {
  return numero * 2;
}

let numeroDoble = numDoble(5);
console.log(numeroDoble);

/* Crear una función que reciba tres números como parámetros y devuelva su promedio. */

function promedioNum(num1, num2, num3) {
  let promedio = parseInt(num1 + num2 + num3 / 3);
  console.log(promedio);
  return;
}

promedioNum(4, 4, 4);

/* Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos. */

function mayorNum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log("Los numeros son iguales");
  }
  return;
}

mayorNum(6, 4);

/* Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */

function multiplicarNum(numero) {
  let resultado = numero * numero;
  console.log(resultado);
  return;
}
multiplicarNum(5);

/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros. */

function IMC(altura, peso) {
  return parseInt(peso / altura ** 2);
}
let indice = IMC(1.65, 68);
console.log(indice);

/* Crea una función que calcule el valor del factorial de un número pasado como parámetro. */

function factorial(numero) {
  let valorFactorial = 1;
  for (i = 1; i <= numero; i++) {
    valorFactorial = parseInt(valorFactorial * i);
  }
  console.log(valorFactorial);
  return;
}

factorial(7);

/* Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente */

function dolarAPeso(dolar) {
  return parseInt(dolar * 821.92);
}
let valorEnPesos = dolarAPeso(5);
console.log(valorEnPesos);

/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros. */

function areaPerimetroSalaRectangular(altura, anchura) {
  let perimetro = parseInt((altura + anchura) * 2);
  console.log(`El perimetro de ${altura} y ${anchura} es ${perimetro}`);
  let area = parseInt(altura * anchura);
  console.log(`El area de ${altura} y ${anchura} es ${area}`);
  return;
}

areaPerimetroSalaRectangular(2, 2);

/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */

function areaPerimetroSalaCircular(radio) {
  let pi = 3.14;
  let perimetro = parseInt(pi * radio * 2);
  console.log(`El perimetro es ${perimetro}`);
  let area = parseInt(radio * radio * pi);
  console.log(`El area es ${area}`);
}

areaPerimetroSalaCircular(5);

/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */
let resultado = 0;

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

tablaMultiplicar(5);
