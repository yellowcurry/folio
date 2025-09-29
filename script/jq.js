$(function() {

	var allQuotes = $(".ref");
	var currentQuote = 0;
	var quoteTimer;

	// Ensure first reference is visible immediately
	$(allQuotes[0]).show();

	function changeQuote() {
		$(allQuotes[currentQuote]).fadeOut(500, function() {
			if (currentQuote == allQuotes.length - 1) {
				currentQuote = 0;
			} else {
				currentQuote++;
			}
			$(allQuotes[currentQuote]).fadeIn(500);
		});
	}

	// Start cycling after 5 seconds (gives time to read first reference)
	quoteTimer = setInterval(changeQuote, 5000);

	// Pause animation on hover, resume when mouse leaves
	$(".refblock").hover(
		function() {
			clearInterval(quoteTimer);
		},
		function() {
			quoteTimer = setInterval(changeQuote, 5000);
		}
	);

}); //end of doc ready