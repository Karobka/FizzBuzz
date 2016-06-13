$(document).ready(function() {
  'use strict'

var userNumber=prompt('Give us a number precious and we plays us a game!');

preciousGame(userNumber);
 
function preciousGame(theNumber) {
  //theNumber=parseInt('theNumber');
  if(theNumber === NaN) {
    alert("Just numbers, not letters precious.");
  }else if(theNumber % 1 !== 0){
    alert("We hates decimals precious, yes, we hates them. Take them out!");
  }else {
      for (var i=1; i<=theNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $("#puthere").append('<p>' + 'fizzbuzz' + '</p>');
            console.log('fizzbuzz');
        }else if (i % 3 === 0) {
          $("#puthere").append('<p>' + 'fizz' + '</p>');
          console.log("fizz");
        }else if (i % 5 === 0) {
          $("#puthere").append('<p>' + 'buzz' + '</p>');
            console.log("buzz");
        }else {
            $("#puthere").append('<p>' + i + '</p>');
            console.log(i);
          }
        }
      }
    }
});



