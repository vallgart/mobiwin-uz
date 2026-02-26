document.addEventListener("DOMContentLoaded", function () {

    document.documentElement.classList.remove("preload-lock");

    const launchDate = new Date("2026-03-09T00:00:00+05:00").getTime();

    const overlay = document.getElementById("launchOverlay");
    const lockedContent = document.getElementById("lockedContent");

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateTimer() {
        const now = Date.now();
        const distance = launchDate - now;

        if (distance <= 0) {
            overlay.style.display = "none";
            lockedContent.style.display = "block";
            document.body.classList.remove("no-scroll");
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    if (Date.now() < launchDate) {
        overlay.style.display = "flex";
        lockedContent.style.display = "none";
        document.body.classList.add("no-scroll");

        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
    } else {
        overlay.style.display = "none";
        lockedContent.style.display = "block";
        document.body.classList.remove("no-scroll");
    }

});