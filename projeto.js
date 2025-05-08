// Jogo de Adivinhação em JavaScript
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let maxTentativas = 10;

function adivinharNumero() {
    const entrada = prompt("Adivinhe um número entre 1 e 100:");
    const palpite = Number(entrada);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return adivinharNumero();
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    } else if (tentativas >= maxTentativas) {
        alert(`Suas ${maxTentativas} tentativas acabaram! O número era ${numeroSecreto}.`);
    } else {
        const dica = palpite < numeroSecreto ? "maior" : "menor";
        alert(`Errado! O número é ${dica} que ${palpite}. Tentativas restantes: ${maxTentativas - tentativas}`);
        adivinharNumero();
    }
}

// Inicia o jogo
adivinharNumero();
