/**
 * Pindah antar slide dengan Fade In
 */
function goToSlide(slideNumber) {
    const allSlides = document.querySelectorAll('.slide');
    
    allSlides.forEach(slide => {
        slide.classList.add('hidden');
        slide.classList.remove('active', 'fade-in');
    });

    const targetSlide = document.getElementById('slide' + slideNumber);
    
    if (targetSlide) {
        targetSlide.classList.remove('hidden');
        requestAnimationFrame(() => {
            targetSlide.classList.add('active', 'fade-in');
        });
    }
}

/**
 * Tombol "No" lari saat didekati
 */
function runAway() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.max(10, x) + 'px';
    noBtn.style.top = Math.max(10, y) + 'px';
    noBtn.style.transition = "left 0.2s ease, top 0.2s ease";
}

/**
 * Alur saat klik "Yes" - Menampilkan Galeri secara instan
 */
function finishStory() {
    // Sembunyikan semua slide lain dengan cepat
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active', 'fade-in');
    });

    // Tampilkan slide final secara instan
    const finalSlide = document.getElementById('finalSlide');
    if (finalSlide) {
        finalSlide.classList.remove('hidden');
        finalSlide.classList.add('active', 'fade-in');
    }

    // Selebrasi Confetti
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffffff', '#ff4d6d']
    });
}

/**
 * Kirim Notifikasi WhatsApp
 */
function notifyWA() {
    const nomorWA = "6289512386638"; 
    const pesan = "Aku udah baca kapsul waktunya... dan jawabannya I WILL!";
    const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.location.href = linkWA;
}