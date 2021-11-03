
// Single Responsibility principle 
// Class example


// Function example
// Function doing too much
// Problems with scaling the codebase long term and reusing functionality
// More than one reason for this function to change
function calculateSumAndMultiplyBy3(number1, number2){
  return (number1 + number2) * 3
}

function calculateSumAndMultiplyBy4(number1, number2){
  return (number1 + number2) * 4
}

function calculateSumAndMultiplyBy5(number1, number2, number3){
  return (number1 + number2 + number3) * 5
}
// ...
// Refactor
// Functions are doing one thing
// Only one reason for each function to change
// Ability to share logic
// Scales very well and easier to test
function calculateSum(...numbers){
  let output = 0
  for(let i = 0; i < numbers.length; i++){
    const isNumber = isNaN(Number(numbers[i])) === false
    if(isNumber){
      output += numbers[i]
    }
  }
  return output
}

function getMultiplyBy(multiplier){
  return function(num1){
    return multiplier * num1
  }
}
const multiplyBy3 = getMultiplyBy(3)
const output = multiplyBy3(calculateSum(1,2))

console.log(
 output 
)
