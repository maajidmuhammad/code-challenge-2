//You are tasked to write a function that takes an array of numbers as input and returns a new array containing only the prime numbers.
function primeNumbers(array){
    //.filter method which creates a new array and returns the prime elements
        return array.filter(isPrime )
}
//function that checks if a given num is prime number or not
function isPrime(num){
    if(num <2) return false;  //if the number is less than 2 its not a prime number
    for (let i = 2; i <=Math.sqrt(num); i++){//iterate from 2
        if (num % i ===0) return false  //if a number is divisible by x without a remainder then (num % i ===0)
        
    }
    return num > 1;//if the loop is complete without finding any factor and number is greater than 1 then the number is a primeNumber

}
const input = [1,2,3,4,5,6,7,8,9,10]  //create variable that takes input of numbers as an array
const primeArrays = primeNumbers (input) //invokes the primeNumbers function with an argument (input)
console.log(primeArrays) //outputs the result [2,3,5,7]
