///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 1
Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.
*/
function tripleWord(str){
    console.log(str.repeat(3))
};

tripleWord('Tech');
tripleWord('Global');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 2
Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
Fahrenheit. 
    Multiply the Celsius temperature by 9.
    Divide the result by 5.
    Add 32 to the result.
*/
function celciusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9) / 5 + 32
    console.log(fahrenheit)
};
celciusToFahrenheit(20);    // 68
celciusToFahrenheit(25);    // 77
celciusToFahrenheit(0);     // 32
celciusToFahrenheit(-10);   // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 3
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)

Examples:
rectangleArea(5, 4) 	-> 20
rectangleArea(3, 7) 	-> 21
rectangleArea(6, 10) 	-> 60

rectanglePerimeter(5, 4) 		-> 18
rectanglePerimeter(3, 7) 		-> 20
rectanglePerimeter(6, 10) 	    -> 32
*/
console.log(rectangleArea(5, 4));         	// 20
console.log(rectangleArea(3, 7));         	// 21
console.log(rectangleArea(6, 10));        	// 60

console.log(rectanglePerimeter(5, 4)); 		// 18
console.log(rectanglePerimeter(3, 7)); 		// 20
console.log(rectanglePerimeter(6, 10));     // 32
// EXAMPLE: Call function inside another function
function multiply(a, b){
    // you could put some logic here to make sure a & b are numbers
    return a * b
};
function rectangleArea(x, y){
    return multiply(x, y)
};
function rectanglePerimeter(x, y){
    return multiply(2, (x + y))
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 4
Write 2 functions named as squareArea() and squarePerimeter() which calculate the area and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

Conversion Formula:
Area: x * x
Perimeter 4 * x
*/
function squareArea(a){
    console.log(a ** 2)
};
function squarePerimeter(a){
    console.log(4 * a)
};

squareArea(5);   	    // 25
squareArea(3);   	    // 9
squareArea(6);   	    // 36

squarePerimeter(5); 	// 20
squarePerimeter(3); 	// 12
squarePerimeter(6); 	// 24