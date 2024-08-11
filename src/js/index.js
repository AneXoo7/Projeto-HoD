/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
- passo 1 -  dar um jeito de pegar o elemento HTML dos botões
- passo 2 - dar um jeito de indentificar o clique do usuário no botão
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marca o botão clicado como se estivesse selecionado
- passo 5 - esconder a imagem anteriormente selecionada
- passo 6 - fazer aparecer a imagem correspondente ao botão selecionado
- passo 7 - esconder a informação do dragão anteriormente selecionado
- passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        DesmarcarBotaoAtivo();

        MarcarBotaoSelecionado(botao);

        EsconderImagemAtiva();

        MostrarImagemSeguinte(indice);

        EsconderInformacoesAtivas();

        MostrarInformacoesSeguintes(indice);


    });
});



function MostrarImagemSeguinte(indice) {
    MostrarImagemSelecionada(indice);
}

function MostrarInformacoesSeguintes(indice) {
    informacoes[indice].classList.add("ativa");
}

function EsconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");
}

function MostrarImagemSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function MarcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function DesmarcarBotaoAtivo() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

function EsconderImagemAtiva() {
    const imamgemAtiva = document.querySelector(".ativa");

    imamgemAtiva.classList.remove("ativa");
}

