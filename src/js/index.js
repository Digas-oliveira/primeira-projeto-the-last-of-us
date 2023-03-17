// passo 1 - dar um jeito de pegar o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
 
// passo 2 - dar jeito de intendificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{


        
        // passo 3 - desmarca o botão selecionado anterior
        desativarbotaoselecionado ();

        // passo 4 - marca o botão clicado se estivesse selecionado
        selecionarbotaocarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderimagemativa();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado 
        mostrarimagemdefundo(indice);
    
    })
}) 

function mostrarimagemdefundo(indice) {
    (imagens[indice]).classList.add('ativa');
}

function selecionarbotaocarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderimagemativa() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarbotaoselecionado () {
    const botoeSelecionado = document.querySelector('.selecionado');
    botoeSelecionado.classList.remove('selecionnado');
}
