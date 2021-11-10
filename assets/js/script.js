// Function 1
let checkUserNumber = () =>
{
  let yourNumber;
  while (!(yourNumber >= 1) || !(yourNumber <= 20))  {
    if(yourNumber == undefined) {
      yourNumber = prompt(`Bienvenido. \nIngrese un número entero entre el 1 y el 20.`);
    }
    else {
      yourNumber = prompt(`Sorry, el número ${yourNumber} está fuera del rango. \nIngrese un número entero entre el 1 y el 20`);
    }
  }
  alert(`El número ingresado es ${yourNumber}`);
  return parseInt(yourNumber);
  }

let userNumber = checkUserNumber()

// Function 2
let multiplicationTables = (n1) => {
let inputNumber = n1;
for (let index = 1; index < inputNumber+1 ; index++) {
  console.log(`${index} x  ${inputNumber} = ${index*inputNumber}`);
}
}

multiplicationTables(userNumber);

// Function 3
let factorialTable = (myNumber) => {

for (let countingLoop = 1; countingLoop < myNumber+1 ; countingLoop++){ // hace el loop 5 veces
    console.log(`Para Factorial de ${countingLoop} debes multiplicar los siguientes números:`)
    for ( let incrementingNum = 1 ; incrementingNum < countingLoop+1 ; incrementingNum++) { // hace loop creciente de 1 a 5
      console.log(incrementingNum); // por arreglar!! Estamos casi listos.
    }
}
}

factorialTable(userNumber);


