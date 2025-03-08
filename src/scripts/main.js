// Main JavaScript for Cline Project Guide

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle the active class on the button for the animation
            this.classList.toggle('active');
            
            // Toggle the nav-closed class on the navigation
            mainNav.classList.toggle('nav-closed');
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('#main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Close the mobile menu if it's open
            if (window.innerWidth <= 768) {
                mainNav.classList.add('nav-closed');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
            
            if (targetElement) {
                // Get the height of the fixed navigation
                const navHeight = document.querySelector('#main-nav').offsetHeight;
                
                // Calculate the position to scroll to (subtracting the nav height)
                const targetPosition = targetElement.offsetTop - navHeight;
                
                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Make checkboxes in the checklist interactive and save state
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    
    // Load saved checkbox states from localStorage
    checkboxes.forEach((checkbox, index) => {
        const savedState = localStorage.getItem(`checkbox_${index}`);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
        
        // Save checkbox state when changed
        checkbox.addEventListener('change', function() {
            localStorage.setItem(`checkbox_${index}`, this.checked);
        });
    });
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
