/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'Square':
      let squareRow = ''
      for (let i = 0; i < height; i++) {
        squareRow += character;
      }
      for (let j = 0; j < height; j++) {
        console.log(squareRow)
      }
      break;
    case 'Triangle':
      let triangleRow = ''
      for (let i = 0; i < height; i++) {
        triangleRow += character
        console.log(triangleRow)
      }





    case 'Diamond':
      let diamondRow = '';
      let spaceString = ' '; // string used for just the space character
      for (let i = 0; i < Math.floor(height / 2); i++) {
        let diamondRow = '';    // reseting diamond row every iteration
        let mathExpression = (Math.floor((height / 2)) - i);
        diamondRow += spaceString.repeat(mathExpression);
        diamondRow += character.repeat(1 + 2 * i)
        console.log(diamondRow)
      }
      for (let i = height; i > Math.floor(height / 2); i--) {
        let diamondRow = '';    // reseting diamond row every iteration
        let mathExpression = (Math.floor(i - (height / 2)) );
        // console.log(mathExpression)
        diamondRow += spaceString.repeat((height - i));
        diamondRow += character.repeat(1 + 2 * mathExpression)
        console.log(diamondRow)
      }
      break;






    default:
      console.log("Invalid shape");
  }
}

// printShape("Square", 3, "%")
// printShape("Triangle", 3, "$");
printShape("Diamond", 7, "*");
printShape("Diamond", 4, "*");

