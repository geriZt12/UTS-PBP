// Function to handle product purchase
function buyProduct(productName, price) {
    alert(`Terima kasih! Anda telah membeli ${productName} seharga Rp ${price.toLocaleString('id-ID')}. Pesanan Anda akan segera diproses.`);
}

// Function to validate contact form
function validateForm(event) {
    event.preventDefault();
    
    // Get form elements
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
        alert('Mohon lengkapi semua field yang wajib diisi!');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Mohon masukkan alamat email yang valid!');
        return false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Mohon masukkan nomor telepon yang valid!');
        return false;
    }
    
    // If all validations pass
    alert('Pesan berhasil dikirim! Terima kasih telah menghubungi GeoCloth. Kami akan segera merespons pesan Anda.');
    document.getElementById('contactForm').reset();
    return true;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .card');
    animatedElements.forEach(el => observer.observe(el));
});
  