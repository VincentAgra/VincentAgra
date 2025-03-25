// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission (placeholder)
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form, so no message was actually sent.');
        this.reset();
    });
}

// CV Download functionality
const downloadCvBtn = document.querySelector('.about-text .btn');

if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = 'assets/it_cv.pdf'; // Path to your CV file
        link.download = 'Vincent_Agra_CV.pdf'; // What the downloaded file will be named
        
        // Append to the body, trigger the download, then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Show a visual confirmation
        const originalText = this.textContent;
        this.textContent = 'Downloading...';
        
        setTimeout(() => {
            this.textContent = originalText;
        }, 1500);
    });
}