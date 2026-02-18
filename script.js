// HEDEF TARİH: YKS 2026 (TYT Oturumu - 20 Haziran 2026, 10:15)
const targetDate = new Date("June 20, 2026 10:15:00").getTime();

// Sayaç Fonksiyonu
const updateCountdown = () => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if (gap > 0) {
        document.getElementById("days").innerText = textDay < 10 ? '0' + textDay : textDay;
        document.getElementById("hours").innerText = textHour < 10 ? '0' + textHour : textHour;
        document.getElementById("minutes").innerText = textMinute < 10 ? '0' + textMinute : textMinute;
        document.getElementById("seconds").innerText = textSecond < 10 ? '0' + textSecond : textSecond;
    } else {
        document.querySelector(".container").innerHTML = "<h1>Sınav Başladı! Başarılar...</h1>";
    }
};

setInterval(updateCountdown, 1000);
updateCountdown();

// --- TEMA DEĞİŞTİRME MANTIĞI ---

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Kullanıcının daha önceki tercihini kontrol et
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // İkonu değiştir ve tercihi kaydet
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});
