// Jogo de Adivinhação em JavaScript
function iniciarJogo() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const maxTentativas = 10;
    let tentativas = 0;
    let acertou = false;

    while (tentativas < maxTentativas && !acertou) {
        const entrada = prompt("Adivinhe um número entre 1 e 100:");
        const palpite = Number(entrada);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Por favor, insira um número válido entre 1 e 100.");
            continue;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            alert(`🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
            acertou = true;
        } else {
            const dica = palpite < numeroSecreto ? "maior" : "menor";
            alert(`❌ Errado! O número é ${dica} que ${palpite}. Tentativas restantes: ${maxTentativas - tentativas}`);
        }
    }

    if (!acertou) {
        alert(`Suas ${maxTentativas} tentativas acabaram! O número era ${numeroSecreto}.`);
    }

    const jogarNovamente = confirm("Deseja jogar novamente?");
    if (jogarNovamente) {
        iniciarJogo();
    }
}

// Inicia o jogo
iniciarJogo();
