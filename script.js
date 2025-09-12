document.addEventListener('DOMContentLoaded', function () {
    const botaoGuiaUMP = document.getElementById('botao-guia-ump');
    const opcoesGuia = document.getElementById('opcoes-guia');

    botaoGuiaUMP.addEventListener('click', function () {
        botaoGuiaUMP.classList.toggle('rotacao-botao');
        opcoesGuia.classList.toggle('mostrar-guia');
    });

    const dicaSensibilidade = document.getElementById('dica-sensibilidade');
    const dicaMira = document.getElementById('dica-mira');
    const dicaDistancia = document.getElementById('dica-distancia');

    dicaSensibilidade.addEventListener('click', function () {
        alert("🔧 Sensibilidade recomendada: Alta. Ajuste a geral entre 85 e 95.");
    });

    dicaMira.addEventListener('click', function () {
        alert("🎯 Puxe a mira levemente para cima após o primeiro disparo. Evite arrastar demais.");
    });

    dicaDistancia.addEventListener('click', function () {
        alert("📏 Ideal para curta/média distância. Aproxime-se e use o movimento lateral.");
    });
});

