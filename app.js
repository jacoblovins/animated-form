function animatedForm(){
	const arrows = document.querySelectorAll (".fa-arrow-down");

	arrows.forEach(arrow => {
		//submit from enter
		arrow.addEventListener('onkeydown', (event) => {
			if (event.keyCode === 13)
				whenClicked();
		});
		//submit from click
		arrow.addEventListener('click', function whenClicked() {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;
			
		//Check for validation
			if (input.type === "text" && validateUser(input)) {
				nextSlide(parent, nextForm);
			} else if(input.type === 'email' && validateEmail(input)){
				nextSlide(parent, nextForm);
			} else if(input.type === 'password' && validateUser(input)){
				nextSlide(parent, nextForm);
			} else{
				parent.style.animation = "shake 0.5s ease";
			}
			//get rid of animation- make it shake again
			parent.addEventListener("animationend", () => {
				parent.style.animation = "";
			});
		});
	});
}

function validateUser(user){
	if (user.value.length < 6) {
		console.log("not enough Characters");
		error(document.body.style.backgroundColor = "rgb(189,87,87)");
	} else {
		error(document.body.style.backgroundColor = "rgb(87,189,130)");
		return true;
	}
}

function validateEmail(email){
	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (validation.test(email.value)) {
		error(document.body.style.backgroundColor = "rgb(87,189,130)");
		return true;
	} else {
		console.log("invalid email");
		error(document.body.style.backgroundColor = "rgb(189,87,87)");
	}
}

function nextSlide(parent, nextForm){
	parent.classList.add('inactive');
	parent.classList.remove('active');
	nextForm.classList.add('active');
}

function error(color) {
	document.body.style.backgoundColor = color;
}

animatedForm();