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

function esconderCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.remove("selecionado");
}

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}