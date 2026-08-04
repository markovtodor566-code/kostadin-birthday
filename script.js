let percent = 0;

const loading = document.getElementById("loading");
const main = document.getElementById("main");
const bar = document.getElementById("bar");
const txt = document.getElementById("percent");

const interval = setInterval(() => {

    percent++;

    bar.style.width = percent + "%";
    txt.innerHTML = percent + "%";

    if (percent >= 100) {

        clearInterval(interval);

        loading.style.display = "none";
        main.style.display = "block";

        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });

    }

}, 30);

document.getElementById("gift").addEventListener("click", () => {

    confetti({
        particleCount: 400,
        spread: 250,
        origin: { y: 0.5 }
    });

    document.getElementById("main").style.display = "none";

    const message = document.getElementById("message");

    message.style.display = "flex";

});
