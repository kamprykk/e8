// Konfiguracja daty egzaminu
const targetDate = new Date(2025, 4, 13); // 13 maja 2025

// Inicjalizacja muzyki
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = 0.5; // 50% głośności
// Obsługa autoodtwarzania po interakcji
document.addEventListener('click', function() {
    backgroundMusic.play().catch(() => {});
}, { once: true });

// Funkcja odliczania
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "Czas start!";
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Dźwięk tyknięcia
    const tick = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    tick.play().catch(() => {});

    document.getElementById('countdown').textContent = 
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Inicjalizacja
setInterval(updateCountdown, 1000);
updateCountdown();
