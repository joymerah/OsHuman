document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas Navigasi Smooth (Minimalis)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efek Sederhana pada Hero Title (Pemanis Minimalis)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease-in-out';
            heroTitle.style.opacity = '1';
        }, 300);
    }
    
    console.log("HumanOS Boilerplate Initialized.");
});

// --- Catatan Developer ---
// Dalam versi pengembangan React/Next.js (Tahap 2), 
// fungsionalitas di sini akan digantikan oleh manajemen state framework.
// JS ini hanya untuk Landing Page statis/protoype.
