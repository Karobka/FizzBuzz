$(document).ready(function() {
for (var i=1; i<=100; i++) {
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
});