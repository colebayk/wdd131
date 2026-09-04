document.addEventListener('DOMContentLoaded', function () {

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('primary-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('open');
            hamburger.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });
    }

    // Footer Year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = '©' + new Date().getFullYear() + ' 😍 Colebay Kaps Kamanda | Sierra Leone 😍';
    }

    // Footer Last Modified
    const dateSpan = document.getElementById('lastModified');
    if (dateSpan) {
        dateSpan.textContent = 'Last Modified: ' + document.lastModified;
    }

});