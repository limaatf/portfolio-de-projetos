
document.addEventListener('DOMContentLoaded', function () {
    const botaoGuiaDicas = document.getElementById('botao-dicas');
    const dicasRapidas = document.getElementById('dicas-rapidas');

    // Toggle para mostrar ou esconder as dicas rápidas
    botaoGuiaDicas.addEventListener('click', function () {
        botaoGuiaDicas.classList.toggle('rotacao-botao');
        dicasRapidas.classList.toggle('d-block');
    });

    // Acessibilidade: Aumentar e Diminuir Fonte
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');

    let tamanhoFonte = 1;

    aumentarFonteBtn.addEventListener('click', function () {
        tamanhoFonte += 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    diminuirFonteBtn.addEventListener('click', function () {
        tamanhoFonte = Math.max(0.8, tamanhoFonte - 0.1); // Evita fontes muito pequenas
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });
});

