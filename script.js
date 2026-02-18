// HEDEF TARİH: YKS 2026 (TYT Oturumu)
// Tarih: 20 Haziran 2026, Saat: 10:15
const targetDate = new Date("June 20, 2026 10:15:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Zaman hesaplamaları (Milisaniye cinsinden)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Kalan gün, saat, dakika ve saniyeyi hesapla
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // HTML elementlerine yazdır
    if (gap > 0) {
        document.getElementById("days").innerText = textDay < 10 ? '0' + textDay : textDay;
        document.getElementById("hours").innerText = textHour < 10 ? '0' + textHour : textHour;
        document.getElementById("minutes").innerText = textMinute < 10 ? '0' + textMinute : textMinute;
        document.getElementById("seconds").innerText = textSecond < 10 ? '0' + textSecond : textSecond;
    } else {
        // Sınav anı geldiğinde veya geçtiğinde
        document.querySelector(".container").innerHTML = "<h1>Sınav Başladı! Başarılar...</h1>";
        // İstersen burada konfetili bir animasyon tetikleyebilirsin.
    }
};

// Her saniye (1000 milisaniye) fonksiyonu tekrar çalıştır
setInterval(updateCountdown, 1000);

// Sayfa yüklendiği an sayacı hemen başlat (1 saniye gecikmeyi önler)
updateCountdown();
