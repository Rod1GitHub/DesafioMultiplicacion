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

  return parseInt(yourNumber);
  }

let userNumber = checkUserNumber()

// Function 2
let multiplicationTables = (n1) => {
let inputNumber = n1;
for (let index = 1; index < inputNumber+1 ; index++) {
  console.log(`${index} x ${inputNumber} = ${index*inputNumber}`);
}
}

multiplicationTables(userNumber);


// Function 3

let factorialTable = (myNumber) => {
let factNumber = 1;

for (let countingLoop = 1; countingLoop <= myNumber; countingLoop++) {
  factNumber = factNumber * countingLoop;

  for (let incrementingNum = 1; incrementingNum <= myNumber; incrementingNum++) {
      console.log(`El factorial de ${countingLoop} es ${factNumber}`);
  }
}
};

factorialTable(userNumber); 
