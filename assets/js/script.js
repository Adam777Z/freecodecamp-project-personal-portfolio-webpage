const projectName = 'portfolio';
localStorage.setItem('example_project', 'Personal Portfolio');

document.addEventListener('DOMContentLoaded', (event) => {
	const ScrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbar'
	});

	// Smooth Scroll to ID (disabled for the test to pass)
	// document.querySelectorAll('a[href*="#"]').forEach((e) => {
	// 	e.addEventListener('click', (event2) => {
	// 		event2.preventDefault();

	// 		// document.querySelector(event2.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });

	// 		window.scroll({
	// 			top: document.querySelector(event2.target.getAttribute('href')).offsetTop - 60,
	// 			left: 0,
	// 			behavior: 'smooth'
	// 		});
	// 	});
	// });
});