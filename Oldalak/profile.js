const profileBtn = document.querySelector("#profileBtn");
const dropdownmenu = document.querySelector("#dropdownmenu");

// Kattintásra megnyitja/bezárja
profileBtn.addEventListener('click', () => dropdownMenu.classList.toggle('show'));

// bárhova máshova kattintasz, bezárja
profileBtn.addEventListener('blur', () => dropdownMenu.classList.remove('show'));

