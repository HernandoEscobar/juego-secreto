/* Crea una lista vacía llamada "listaGenerica". */
let listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
// lenguagesDeProgramacion.push("Ruby");
// lenguagesDeProgramacion.push("GoLang");

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion. */

function mostrarLenguajes(lista) {
  console.log(`Los lenguajes de programacion disponible son: ${lista}`);
}

mostrarLenguajes(lenguagesDeProgramacion);

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */

function ordenInverso(lista) {
  console.log(`Inverso: ${lista.reverse()}`);
}

ordenInverso(lenguagesDeProgramacion);

/* Crea una función que calcule el promedio de los elementos en una lista de números. */

let listaNumeros = [1, 2, 3, 4, 5, 6, 7];
let listaNumeros2 = [1, 2, 3, 4, 5, 6, 7];

function promedioListaNumeros(lista) {
  let promedio = 0;
  let totalListaNumeros = 0;
  for (let i of lista) totalListaNumeros += i;
  // otra forma de hacer la suma de cada numero en la lista
  //   for (let i = 0; i < lista.length; i++) {
  //     totalListaNumeros += lista[i];
  //   }
  promedio = totalListaNumeros / lista.length;
  console.log(`El promedio de la lista de numeros es : ${promedio}`);
  return;
}

promedioListaNumeros(listaNumeros);

/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */

function mostrarMayorMenorNum(lista) {
  let maximo = Math.max(...lista);
  let minimo = Math.min(...lista);
  console.log(`El numero mayor de la lista es: ${maximo}`);
  console.log(`El numero menor de la lista es: ${minimo}`);
}

mostrarMayorMenorNum(listaNumeros);

/* Crea una función que devuelva la suma de todos los elementos en una lista. */
// la funcion utiliza la lista de numeros previamente declarada
function sumaTotal(lista) {
  // se inicializa total en 0 para poder reutilizar la variable previamente declarada
  let suma = 0;
  // se recorre la lista de numeros y se suma el total
  for (let i of lista) suma += i;
  console.log(`La suma de la lista de numeros es: ${suma}`);
  return;
}
sumaTotal(listaNumeros);

/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista. */

function posicionEnLista(lista, elemento) {
  // la funcion utiliza la lista de numeros previamente declarada
  let pos = lista.indexOf(elemento);
  // forma mas directa de hacer un if else
  pos === -1
    ? console.log("El numero no existe en la lista")
    : console.log(`La posicion del ${elemento} en la lista es: ${pos}`);
}

posicionEnLista(listaNumeros, 3);

/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno. */

function sumaListas(lista1, lista2) {
  let suma = lista1.map((num, index) => num + lista2[index]);
  console.log(`La suma de cada elemento en las listas es: ${suma}`);
}

sumaListas(listaNumeros, listaNumeros2);

/* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */

function cuadradoListaNumeros(lista) {
  let result = lista.map((elemento) => elemento * elemento);
  console.log(result);
}
cuadradoListaNumeros(listaNumeros);
