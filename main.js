//Seccion 1
//Ejercicio 1.2
/*
console.log("Ejercicio 1.2");
let a = 3;
let b = 5;
let c = a+b;

console.log("La suma de a y b es: " + c);

//Ejercicio 1.3
console.log("Ejercicio 1.3");
let nombre = prompt("Ingrese su nombre");
console.log("Buenos Dias "+nombre);
*/
//Seccion 2
//Ejercicio 2.1
/*
console.log("Ejercicio 2.1");
let a = 10;
let b = 9;
let c = 13;

if (a>b && a>c){
  console.log("El mayor de los tres numero es a");
} else if (b>a && b>c){
  console.log("El mayor de los tres numero es b");
}else {console.log("El mayor de los tres numero es c")}
//Ejercicio 2.2
console.log("Ejercicio 2.2");
let num = prompt("Ingresa un numero para ver si es par o impar");
(num%2 == 1) ? console.log("El numero " + num + " Es impar") : console.log("El numero " + num + " Es par");
*/
/*
//Seccion 3
//Ejercicio 3.1
console.log("Ejercicio 3.1");
let numero = 10;
while (numero > 0){
  console.log(numero);
  numero--;
}
//Ejercicio 3.2
console.log("Ejercicio 3.2");
let num;
do {
  num = prompt("Ingrese numero mayor a 100");
} while (num <= 100)
console.log("ingresaste un numero mayor a 100: "+ num);
*/
/*
//Seccion 4
//Ejercicio 4.1
function esPar (num){
return num%2==0;
}
console.log("El numero "+ 4 +" es Par: " + esPar(4));
console.log("El numero "+ 7 +" es Par: " + esPar(7));
console.log("El numero "+ 3 +" es Par: " + esPar(3));
//Ejercicio 4.2
function convertirCelsiusAFahrenheit(celcius){
  let F = (celcius * 1.8 + 32);
  console.log(celcius + "C son " + F + "F");
  return F;  
}
convertirCelsiusAFahrenheit(30);
convertirCelsiusAFahrenheit(15);

//Seccion 5
//Ejercicio 5.1
let persona = {
nombre: "Luis",
edad: 25,
ciudad: "Mendoza",
cambiarCiudad: function(nciudad){
this.ciudad = nciudad;
}
}
console.log("Persona: " + persona.nombre + " " + persona.edad + " " + persona.ciudad);
persona.cambiarCiudad("Cordoba");
console.log("Persona: " + persona.nombre + " " + persona.edad + " " + persona.ciudad);
//Ejercicio 5.2
let libro = {
  nombre: "Los diez negritos",
  autor: "Agatha Christie",
  año: 1939,
  mayor10: function(añoA){
return ((añoA-1939) > 10);

  }
}
console.log ("El libro " + libro.nombre + " Es antiguo: " + libro.mayor10(2024));
//Seccion 6
//Ejercicio 6.1
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Narreglo = arreglo.map((elemento) => {
  return elemento*2;
})

console.log("Numero originales: " + arreglo);
console.log("Numeros nuevos: " + Narreglo);
//Ejercicio 6.2
let pares = [];
for (let i = 0; i <= 20; i++) {
  if ((i%2)==0) pares.push(i);
}
console.log("Numeros pares: "+pares);
*/
//Seccion 7
//Ejercicio 7.1
/*
const button = document.getElementById("boton");
const primer = document.getElementById("p1");
const segundo = document.getElementById("p2");
const tercero = document.getElementById("p3");
button.addEventListener("click",()=>{
  p1.classList.add("blueText")
  p2.classList.add("blueText")
  p3.classList.add("blueText")
})
//Ejercicio 7.2
const ingresado = document.getElementById("textoIngresado");
const botoningresar = document.getElementById("botonAlerta");
botoningresar.addEventListener("click",()=>{
  alert("La Alerta dice: " + ingresado.value);
})
*/
//Seccion 8
//Ejercicio 8.1
/*
const e1 = document.getElementById("E1");
const e2 = document.getElementById("E2");
const e3 = document.getElementById("E3");
const e4 = document.getElementById("E4");
e1.addEventListener("click",()=>{
 console.log(e1.textContent);
})
e2.addEventListener("click",()=>{
  console.log(e2.textContent);
 })
 e3.addEventListener("click",()=>{
  console.log(e3.textContent);
 })
 e4.addEventListener("click",()=>{
  console.log(e4.textContent);
 })

 const cajaInput = document.getElementById("input");
 const botonH = document.getElementById("habilitar");
 const botonD = document.getElementById("deshabilitar");

 botonH.addEventListener("click",()=>{
  cajaInput.disabled = false;
 })
 botonD.addEventListener("click",()=>{
  cajaInput.disabled = true;
 })
 */
//Seccion 9
//Ejercicio 9.1

const guardar = document.getElementById("guardarCorreo");
const borrar = document.getElementById("borrarCorreo");
const resultadoTexto = document.getElementById("resultado");
const correoingresado = document.getElementById("areaCorreo")

const obtenerDatos = () => {
  const correo = correoingresado.value;
  localStorage.setItem("correo" , JSON.stringify({correo}))
};

guardar.addEventListener("click",()=>{

obtenerDatos();

  const resultado = JSON.parse(localStorage.getItem("correo"));
  if (resultado) {
    resultadoTexto.textContent = "Correo Guardado: " + resultado.correo;
  }else {
    obtenerDatos();
    correoingresado.value = " "
  }
  
  
 })

 borrar.addEventListener("click",()=>{
  localStorage.removeItem("correo");
  resultadoTexto.textContent = " ";
  correoingresado.value = " "
 })