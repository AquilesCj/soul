const fundo = document.querySelector(".fundo-bolinhas");

const cores = [
    "#ff4d4d",
    "#4dff4d",
    "#4da6ff",
    "#ffff4d",
    "#ff4dff",
    "#4dffff",
    "#ffffff",
    "#ff0606",
    "#33c8b7"
];

const bolas = [];

for (let i = 0; i < 40; i++) {

    const bola = document.createElement("div");
    bola.className = "bolinha";

    const tamanho = Math.random() * 20 + 8;

    bola.style.width = tamanho + "px";
    bola.style.height = tamanho + "px";
    bola.style.background = cores[Math.floor(Math.random() * cores.length)];

    const x = Math.random() * (window.innerWidth - tamanho);
    const y = Math.random() * (window.innerHeight - tamanho);

    bola.style.left = x + "px";
    bola.style.top = y + "px";

    fundo.appendChild(bola);

    bolas.push({
        el: bola,
        x,
        y,
        dx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
        dy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
        t: tamanho
    });
}

function animar() {

    bolas.forEach(b => {

        b.x += b.dx;
        b.y += b.dy;

        if (b.x <= 0 || b.x >= window.innerWidth - b.t)
            b.dx *= -1;

        if (b.y <= 0 || b.y >= window.innerHeight - b.t)
            b.dy *= -1;

        b.el.style.left = b.x + "px";
        b.el.style.top = b.y + "px";
    });

    requestAnimationFrame(animar);
}

animar();