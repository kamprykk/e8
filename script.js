const targetDate = new Date(2025, 4, 14, 9, 0, 0);
const backgroundMusic = document.getElementById('backgroundMusic');


backgroundMusic.volume = 0.5;

document.addEventListener('click', function() {
    backgroundMusic.play().catch(() => {});
}, { once: true });

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "Egzamin się rozpoczął!";
        document.querySelector('.footer').textContent = "Powodzenia na egzaminie!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const tick = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    tick.play().catch(() => {});

    document.getElementById('countdown').textContent = 
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
