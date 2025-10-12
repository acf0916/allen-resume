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

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-list a');

  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop();

  // Loop through links
  navLinks.forEach(link => {
    // Check if link href matches current page
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');  // Add active class
    }
  });
  

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = 'images/favicon.png';
  document.head.appendChild(link);

