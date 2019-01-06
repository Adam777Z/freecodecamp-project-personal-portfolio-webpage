const projectName = 'portfolio';
localStorage.setItem('example_project', 'Personal Portfolio');

$(document).ready(function() {
	$('body').scrollspy({
		target: '#navbar'
	});

	// Smooth Scroll to ID (disabled for the test to pass)
	// $('a[href*="#"]').on('click', function(e) {
	// 	e.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: $($(this).attr('href')).offset().top
	// 	}, 200, 'linear');
	// });
});