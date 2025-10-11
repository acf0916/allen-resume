document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Add a check to ensure the elements exist before attaching listeners
    if (burger && navList) {
        
        // Toggle menu on burger click
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // <<-- THIS IS THE CRITICAL FIX
            navList.classList.toggle('show');
        });

        // Close menu when clicking outside navbar
        document.addEventListener('click', (e) => {
            // Note: The click target is checked against a parent element with class .navbar
            if (!e.target.closest('.navbar')) {
                navList.classList.remove('show');
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });
    }
});