// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert when "Exempel" button is clicked
document.getElementById('exempel-button').addEventListener('click', function(e) {
    e.preventDefault();
    alert('You will be redirected to Exempel page.');
    window.location.href = this.getAttribute('href'); // Redirect after alert
});
