var jnwadeLib = function(){
	
	var compareDates = function(d1, d2) {
		var dayBreakdown = 24*60*60*1000; //hours in a day, minutes in an hour, seconds in a minute, milliseconds in a second.
		var difference = Math.abs(((d1.getTime() - d2.getTime())/(dayBreakdown))); // This returns a long string of numbers so I...
		var roundDiff = Math.round(difference*10)/10 // ... used Math.round to shorten it to the nearest 10th.
                console.log("There are " + roundDiff + " days between " + d1 + " and " + d2 + ".");
	};
	
	var checkEmail = function (email){
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                /*
                The regex is contained within "//". ^ tells the computer where it starts and $ lets it know where it ends. 
                The information between the first set of brackets "[]" gives exceptable characters, in this case lower case
                and capital letters, numbers 0-9, and "periods," "underscores," and "dashes". The "+@" confirmes that there is an @ symbol
                and then we use a similar format to check the domain info only we've taken out the option for an "underscore". The "+\." is
                used to check for a "period" between out domain and the "TLD" and we have to use an escape on it as a "period" alone in a regular expression
                has a different function all together.
	        */
	        
			if(emailPattern.test(email)){   // here we are testing the emailPattern variable against the argument entered into the function and returning a boolean based on the results.
			console.log("You have entered a valid email address.");
			}
			else
			{
			console.log("You have entered an invalid email address. Please try again.")
			};
	};	
};



