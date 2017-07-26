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
; // array to store the larger values of the numberList array.


//Write a function that returns the largest element in an array.
function compare(arrayName){

var max = arrayName[0]
    for(var i = 1 ; i< arrayName.length; i++){
    if(max < arrayName[i]){
        max = arrayName[i];
    }
}
return max // stores the value of the max number
}

console.log(compare(numberList)); // run the function and prints its value



//Write a function that checks whether an element occurs in an array. Make the function return true or false.
function isPreset(number, arrayName){

for(var i = 0; i < arrayName.length; i++ ){
    if(number == arrayName[i]){
        return true ;

    }

}
return false;
}
console.log(isPreset(10, numberList));

//Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90

function oddPosition(arrayName){
var position = 0;
for(var i = 1 ; i < arrayName.length; i+=2){
    position = arrayName[i];
console.log(position);
}

}

console.log(oddPosition(numberList));
//Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)

function total(arrayName){
    var sum = arrayName[0]
    for(var i = 0; i < arrayName.length; i++){
        sum += sum;
    }
    return sum;
}
console.log(total(numberList));

//Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.

function palindrome(word){

}
