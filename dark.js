const soleil = document.querySelector('.soleil_cercle');
const body = document.body;
soleil.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});

const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList'); // Correction ici

menuIcon.addEventListener('click', function (e) {
    e.stopPropagation(); // Empêche la propagation du clic
    menuList.classList.toggle('active');
});