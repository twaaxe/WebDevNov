signInBtn = document.querySelector('.app__login-button');
signInNotification = document.querySelector('.app__notification');
closeBtn = document.querySelector( '.app__notification__close' );

userName = document.querySelector('.app__login--email');
userNameContainer = document.querySelector('.notification-username');

signInBtn.addEventListener("click", function() {
	signInNotification.style.display = "block";
	if (userName.value) {
		userNameValue = userName.value;
	} else {
		userNameValue = 'Somebody';
	}
	userNameContainer.innerHTML = userNameValue;
}, false);

closeBtn.addEventListener("click", function() {
	signInNotification.style.display = "none";
}, false);