const TOP_ALTO = 370;
const TOP_BAIXO = 570;

let ativo1 = false;
let ativo2 = false;
let ativo3 = false;

let score = 0;

const bot1 = document.getElementById("bot1");
const bot2 = document.getElementById("bot2");
const bot3 = document.getElementById("bot3");

const adg1 = document.getElementById("adg1");
const adg2 = document.getElementById("adg2");
const adg3 = document.getElementById("adg3");

document.addEventListener("click", function (e) {
    const img = document.createElement("img");

    img.src = "https://th.bing.com/th/id/R.85aa8e814f6c9c2028e939d4fc2c93b6?rik=H7kF6GrRp9v4YA&pid=ImgRaw&r=0";
    img.style.position = "absolute";
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
    img.style.width = "60px";
    img.style.transform = "translate(-50%, -50%)";
    img.style.pointerEvents = "none";

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 100);
});

bot1.onclick = function () {
    if (!ativo1) return;

    descerADG(adg1);
    ativo1 = false;
    aumentarScore();
};

bot2.onclick = function () {
    if (!ativo2) return;

    descerADG(adg2);
    ativo2 = false;
    aumentarScore();
};

bot3.onclick = function () {
    if (!ativo3) return;

    descerADG(adg3);
    ativo3 = false;
    aumentarScore();
};

function timer(adg, getAtivo, setAtivo) {
    setTimeout(() => {
        if (getAtivo()) {
            timer(adg, getAtivo, setAtivo);
            return;
        }

        subirADG(adg);
        setAtivo(true);
        timer(adg, getAtivo, setAtivo);
    }, Math.random() * 3000 + 2000);
}

function aumentarScore() {
    score += 1;
    document.getElementById("score").textContent = score;
}

function subirADG(elemento) {
    elemento.style.top = TOP_ALTO + "px";
}

function descerADG(elemento) {
    elemento.style.top = TOP_BAIXO + "px";
}

timer(adg1, () => ativo1, v => ativo1 = v);
timer(adg2, () => ativo2, v => ativo2 = v);
timer(adg3, () => ativo3, v => ativo3 = v);
