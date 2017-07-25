
/*Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number
and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz*/

// for (var i = 1; i <= 100; i++) {
//      if (i % 3 == 0 && i % 5 == 0 ){
//         console.log("FizzBuzz " + i )
//      }
//      if(i % 3 == 0){
//         console.log("Fizz " + i);
//      }
//      else if(i%5 == 0){
//         console.log("Buzz "+ i);
//      }else{
//         console.log(i);
//      }

// }

window.onload = function(){
    // alert("The Page has loaded");

    var heading1 = document.createElement("h1");
    var headingText = document.createTextNode("Wow! I just created text in my html by using javaScript");

   heading1.appendChild(headingText);
   document.body.appendChild(heading1);

// Create a new paragraph and append a welcome text
   var para1 = document.createElement("p");
   var para1Text = document.createTextNode("Welcome to the FizzBuzz game!");

   para1.appendChild(para1Text);
   document.body.appendChild(para1);

//================================================//




     // function fizzbuzz ()  {
   //          for (var i = 1; i <= 100; i++) {
   //       if (i % 3 == 0 && i % 5 == 0 ){
   //          console.log("FizzBuzz " + i )
   //       }
   //       if(i % 3 == 0){
   //          console.log("Fizz " + i);
   //       }
   //       else if(i%5 == 0){
   //          console.log("Buzz "+ i);
   //       }else{
   //          console.log(i);
   //       }

   //      }
   //  }// end of the fizzbuzz app

var button1 = document.getElementById('buzz');
    button1.onclick = function(event){
        var clickedEvent =

        alert("button was clicked")
    }

}




