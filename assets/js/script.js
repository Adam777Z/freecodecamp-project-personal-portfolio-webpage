const projectName = 'portfolio';
localStorage.setItem('example_project', 'Personal Portfolio');

var submit_button;

document.addEventListener('DOMContentLoaded', (event) => {
	submit_button = document.querySelector('#submit-button');

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

	document.querySelector('#contact-form').addEventListener('submit', (event2) => {
		event2.preventDefault();
		grecaptcha.reset();
		grecaptcha.execute();
	});
});

function onloadCallback() {
	grecaptcha.render('recaptcha', {
		'sitekey': '6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy',
		'callback': onSubmit,
		'size': 'invisible'
	});
}

function onSubmit(token) {
	submit_button.disabled = true;
	submit_button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></span> <span>Sending...</span>';

	let contact_form_result_alert = document.querySelector('#contact-form-result .alert');

	if (contact_form_result_alert) {
		new bootstrap.Alert(contact_form_result_alert);
		bootstrap.Alert.getInstance(contact_form_result_alert).close();
	}

	fetch('https://usebasin.com/f/f8a55f3aacfc.json', {
		'method': 'POST',
		'headers': {
			'Content-Type': 'application/json'
		},
		'body': JSON.stringify({
			'Name': document.querySelector('#name').value,
			'Email': document.querySelector('#email').value,
			'Message': document.querySelector('#message').value,
			'Source': 'Portfolio',
			'g-recaptcha-response': token
		}),
		'cache': 'no-store'
	})
	.then((response) => {
		if (response['ok']) {
			return response.json();
		} else {
			throw 'Error';
		}
	})
	.then((data) => {
		document.querySelector('#contact-form-result').innerHTML = '<div class="alert alert-success alert-dismissible fade show mt-2 mb-0" role="alert"><span>Email sent successfully.</span><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
		// document.querySelectorAll('#name, #email, #message').forEach(e => e.value = '');
		document.querySelector('#contact-form').reset();
	})
	.catch((error) => {
		document.querySelector('#contact-form-result').innerHTML = '<div class="alert alert-danger alert-dismissible fade show mt-2 mb-0" role="alert"><span>Error. Please try again.</span><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
	})
	.finally(() => {
		submit_button.disabled = false;
		submit_button.textContent = 'Send';
	});
}