document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const fadeInElements = document.querySelectorAll('.fade-in');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 1. Sticky Navigation on Scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // 2. Scroll Animations with Intersection Observer for better performance
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport, add the 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible to save resources
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each 'fade-in' element
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // 3. Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 4. Contact Form Simulation (for demonstration)
    const contactForm = document.getElementById('main-contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        // In a real website, this is where you would send the data to a server.
        // For this demo, we'll just show an alert.
        alert('Thank you for your message! This is a demo. In a real website, your message would be sent.');
        contactForm.reset(); // Clear the form fields
    });

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
});