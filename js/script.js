/*ini js*/

// Toggle menu saat hamburger icon diklik
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener('click', function () {
    navBar.classList.toggle('active'); // Tambah atau hapus class active
});
