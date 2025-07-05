// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create sparkles
const sparklesContainer = document.getElementById('sparkles');
const sparkleCount = 50;

for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 4 + 2;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    // Random animation duration
    sparkle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    
    sparklesContainer.appendChild(sparkle);
}

// Add floating elements to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    // Create floating elements for each section
    for (let i = 0; i < 3; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.classList.add('floating-element');
        
        // Random position
        floatingElement.style.left = `${Math.random() * 80 + 10}%`;
        floatingElement.style.top = `${Math.random() * 80 + 10}%`;
        
        // Random size
        const size = Math.random() * 200 + 100;
        floatingElement.style.width = `${size}px`;
        floatingElement.style.height = `${size}px`;
        
        // Random color
        const colors = ['#1a5276', '#d35400', '#1abc9c', '#3498db'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        floatingElement.style.background = `radial-gradient(circle, ${randomColor} 0%, transparent 70%)`;
        
        // Random animation
        floatingElement.style.animation = `floatAnimation ${Math.random() * 15 + 10}s infinite ${Math.random() > 0.5 ? 'alternate' : 'alternate-reverse'} ease-in-out`;
        
        section.appendChild(floatingElement);
    }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success notification
    const notification = document.getElementById('messageSentNotification');
    notification.classList.add('show');
    
    // Reset form
    this.reset();
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
});