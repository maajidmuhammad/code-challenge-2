//Write a JavaScript function that accepts two numbers to generate an array between them.
function array(minNum, maxNum) {
    // function that accepts two parameters as input
    let emptyArray = []; //an empty array 
    for (let i = minNum; i <= maxNum; i++) {
      //it iterates from minNum to maxNum
      emptyArray.push(i); //push numbers to the empty array
    }
    return emptyArray; // returns the new array
  }
  console.log(array(4, 7)); //result
  