document.addEventListener('DOMContentLoaded', function() {

    // ====== NAVIGATION: BURGER MENU & ACTIVE TAB ======
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');

    if (burger && navList) {
        // Toggle dropdown on burger click
        burger.addEventListener('click', () => {
            navList.classList.toggle('show');
        });

        // Close menu when clicking a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });

        // Highlight active tab based on current page
        const navLinks = navList.querySelectorAll('li a');
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === currentPage);
        });
    }

    // ====== HERO SLIDES ======
    const slides = [
        { title: "Technical Writer", desc: "Transforming complex information...", color: "var(--slide-bg1)", image: "images/technical-writer.jpg" },
        { title: "Technical Support & Gaming Support", desc: "Expert in technical and gaming support...", color: "var(--slide-bg2)", image: "images/technical-support.jpg" },
        { title: "Sales & Web Content Management", desc: "Driving sales and managing web content...", color: "var(--slide-bg3)", image: "images/sales-web.jpg" },
        { title: "Bold Portfolio", desc: "A proven record of excellence...", color: "var(--slide-bg4)", image: "images/portfolio.jpg" }
    ];

    const container = document.querySelector('.slides-container');

    if (container) {
        // Set initial hero background to first slide
        container.style.backgroundImage = `url('${slides[0].image}')`;
        container.style.backgroundColor = slides[0].color;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";

        slides.forEach((slide, i) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('slide');
            if (i === 0) slideDiv.classList.add('active');

            slideDiv.style.backgroundImage = `url('${slide.image}')`;
            slideDiv.style.backgroundColor = slide.color;
            slideDiv.style.backgroundSize = "cover";
            slideDiv.style.backgroundPosition = "center";
            slideDiv.style.backgroundRepeat = "no-repeat";

            const title = document.createElement('h2');
            title.textContent = slide.title;

            const desc = document.createElement('p');
            desc.textContent = slide.desc;

            slideDiv.appendChild(title);
            slideDiv.appendChild(desc);
            container.appendChild(slideDiv);
        });

        let current = 0;
        let timer = null;

        function showSlide(idx) {
            document.querySelectorAll('.slide').forEach((el, i) => {
                el.classList.toggle('active', i === idx);
            });
        }

        function nextSlide() {
            current = (current + 1) % slides.length;
            showSlide(current);
        }

        function prevSlide() {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        }

        function startAutoplay() {
            timer = setInterval(nextSlide, 5000);
        }

        function stopAutoplay() {
            if (timer) clearInterval(timer);
        }

        // Optional: Next/Prev buttons
        const nextBtn = document.querySelector('.slide-btn.next');
        const prevBtn = document.querySelector('.slide-btn.prev');

        if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); nextSlide(); startAutoplay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); prevSlide(); startAutoplay(); });

        // Start autoplay
        startAutoplay();
    }

});
