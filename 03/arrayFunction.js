//Given an array with these elements in it:
// var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
// Write a function that returns the largest element in an array.
// Write a function that checks whether an element occurs in an array. Make the function return true or false. For example:
// function inArray(array, element) { ... }
// if(inArray(numberList, 3)) { console.log("It exists!") }
// Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90
// Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)
// Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.
// You can do all of these in 1 javascript file.

var numberList = [1,5,2,20,7,90,3];
var compare1 = []; // array to store the larger values of the numberList array.
var compare2 = [];
var compare3 = [];

console.log(numberList);
console.log("The length of the array is: "+numberList.length);

for(var i = 0 ; i <= numberList.length; i++){
    if(numberList[i] < numberList[i+1]){
        console.log( numberList[i] + ' is lesser than',numberList[i +1]);
        compare1.push(numberList[i+1])

    }
      console.log(compare1);
}

console.log("new loop begins")
for(var i = 0 ; i <= compare1.length; i++){
    if(compare1[i] < compare1[i+1]){
        console.log( compare1[i] + ' is lesser than',compare1[i +1]);
        compare2.push(compare1[i+1])
    }
}
    console.log(compare2);
//create a functions to test comparison

console.log("function test")
function compare(arrayNum){
    for(var i = 0 ; i <= arrayNum.length; i++){
    if(arrayNum[i] < arrayNum[i+1]){
        console.log( arrayNum[i] + ' is lesser than',arrayNum[i +1]);
        compare1.push(arrayNum[i+1])

    }
      console.log(compare1);
}
}

console.log("function test")
compare(numberList);
