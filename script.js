function sim(){
    alert("Agora, estamos oficilamente namorando 😁👍");
}

const botao = document.getElementById('naoBtn');

    botao.addEventListener("mouseover", () => {
            const larguraTela = window.innerWidth;
            const alturaTela = window.innerHeight;

            const novaPosX = Math.random() * (larguraTela - botao.clientWidth);
            const novaPosY = Math.random() * (alturaTela - botao.clientHeight);

            botao.style.left = `${novaPosX}px`;
            botao.style.top = `${novaPosY}px`;
    });