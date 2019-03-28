'use strict';
const loginBox = document.getElementById('login');
const banner_Text = document.getElementById('banner-text');
const regBox = document.getElementById('register');
const closeicon = document.querySelector('.close');
const loginModal = document.querySelector('.bg-modal');
const registerModal = document.querySelector('.bg-reg-modal');
const closeiconReg = document.querySelector('.closeReg');


// Opens up login Modal popup
loginBox.addEventListener('click', function () {
    banner_Text.style.display = 'none';
	loginModal.style.display = 'flex';
});
// Closes the login Modal popup with the closeicon
closeicon.addEventListener('click', function (){
	banner_Text.style.display = 'block';
	loginModal.style.display = 'none';
});

// Opens up Register Modal popup
regBox.addEventListener('click', function () {
    banner_Text.style.display = 'none';
	registerModal.style.display = 'block';
});
closeiconReg.addEventListener('click', function (){
	banner_Text.style.display = 'block';
	registerModal.style.display = 'none';
});

