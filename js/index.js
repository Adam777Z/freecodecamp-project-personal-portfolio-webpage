const projectName = 'portfolio';
localStorage.setItem('example_project', 'Personal Portfolio');

$('body').scrollspy({
	target: '#navbar'
});

$('a[href*="#"]').on('click', function(e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 200, 'linear');
});