const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivos = [
    new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000), // Meta 1: Aprender uma nova língua (365 dias)
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),   // Meta 2: Fazer um simulado (7 dias)
    new Date(new Date().getTime() + 31 * 24 * 60 * 60 * 1000),  // Meta 3: Ler ao menos quatro livros ao mês (31 dias)
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),   // Meta 4: Fazer uma redação por semana (7 dias)
    new Date(new Date().getTime() + 2 * 60 * 60 * 1000),        // Meta 5: Estudar para uma prova (2 horas)
    new Date(new Date().getTime() + 30 * 60 * 1000),            // Meta 6: Passear com o meu cachorro (30 minutos)
    new Date(new Date().getTime() + 180 * 24 * 60 * 60 * 1000), // Meta 7: Estudar para um vestibular (180 dias)
    new Date(new Date().getTime() + 2 * 60 * 60 * 1000)         // Meta 8: Assistir um filme (2 horas)
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const tempo = calculaTempo(tempoObjetivos[i]);
        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();