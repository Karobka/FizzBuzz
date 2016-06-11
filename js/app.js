$(document).ready(function() {
alert("it works");
for (var i=0; i<=100; i++) {
	if (i % 3 === 0) {
		$("#puthere").append('<p>' + 'fizz' + '</p>');
	  console.log("fizz");
	}else if (i % 5 === 0) {
		$("#puthere").append('<p>' + 'buzz' + '</p>');
      console.log("buzz");
    }else if (i % 3 && i % 5 === 0) {
    	$("#puthere").append('<p>' + 'fizzbuzz' + '</p>');
      console.log('fizzbuzz');
    }else {
    	$("#puthere").append('<p>' + i + '</p>');
      console.log(i);
    }
}
});