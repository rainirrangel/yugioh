const btnFwd = document.getElementById("btn-fwd");
const btnPrev = document.getElementById("btn-prev");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnFwd.addEventListener("click", function(){
    if (cartaoAtual < cartoes.length - 1) {
        esconderCartao(cartaoAtual);
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
}})

btnPrev.addEventListener("click", function() {
    if (cartaoAtual > 0) {
        esconderCartao(cartaoAtual);
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
}})

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartaVirada = cartao.querySelector(".carta-virada");
        
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    })    
});

function esconderCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.remove("selecionado");
}

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}