
//console.log("Hello, Whisky Junchaya Gonzales, JudasPriest");

//function suma (a: number, b: number ): number {
//    return a + b
  
//function calcularIGV(precio:number): number {
//    const igv = 0.18;
//   return precio *igv;
//}
//calcularIGV(1000);


//const meses: Array<string>=["Enero", "Febrero", "Marzo"];
//const mesesNumericos: Array<number>= [1,2,3];
//function numberToWords(num: number): string{
//const words = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete"]; 
  //  if (num < 0 || num > 9) {
   //     throw new Error("Número fuera de rango");
     //   }
       // return words[num];
//}
let nombre; //declara la variable
nombre = "José"; //Asignando el valor
console.log(nombre);

const nombre1: string = "Junchaya Gonzales";
console.log(nombre1);

let edad: number = 15;
console.log(edad);

const meses: Array<string> = ["Enero", "Febrero", "Marzo"]; 
console.log(meses);

const persona1 = {
    nombre: "Junchaya",
    apellido: "Gonzales",
    edad: 15,
}
console.log(persona1);
console.log(typeof persona1);


//console.log(alumno);
//console.log(typeof alumno);

let a: number = 15;
let b: number = 20;
function sumar({ a, b }: { a: number; b: number; }): number {
    return a + b;
}
console.log(sumar({ a, b })); 

function calcularIGV(precio:number): number {
    const igv = 0.18;
   return precio * igv;
}
console.log(calcularIGV(1000));

type persona1 = { 
    nombre: string;
    apellido: string;
    edad: number;
}
const alumno: persona1 = {
    nombre: "Junchaya",
    apellido: "Gonzales",
    edad: 15,
}
console.log(alumno);
console.log(typeof alumno);

function CalculaIGV(precio: number): number {
    const igv = 0.18;
    return precio * igv;
} 
console.log(CalculaIGV(1000));

const mesesNumericos: Array<number> = [1, 2, 3];
console.log(mesesNumericos);

let FirstName = "José";
let lastname = "Junchaya";
console.log(FirstName + " " + lastname);

let K = 10;
console.log(--K);
console.log(K--)
console.log(K);

let pais = "Perú";
let edad1 = 16;
if (pais === "Perú" && edad1 >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

let dayName: number | string = 7;
if (dayName >= 1 && dayName <= 7) {
switch (dayName) {
    case 1:
      dayName = "Lunes";  
      break;
    case 2:
      dayName = "Martes";
      break;   
    case 3:
      dayName = "miércoles";
     break;
    case 4:
      dayName = "Jueves";
      break;  
     case 5:
      dayName = "Viernes"; 
      break;
    case 6:
      dayName = "Sabado"; 
      break;
    case 7:
      dayName = "Domingo"; 
      break;
    default:
      console.log("Día no válido");
      break;
  }
} else {
    dayName = "Día no válido";
}     
console.log("El día es " + dayName);
