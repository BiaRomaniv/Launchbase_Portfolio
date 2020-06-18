const modalOverlay = document.querySelector('.modal-overlay') // busca no documento, o modal overlay
const cards = document.querySelectorAll('.card') // pega todos com classe card

for (let card of cards) { // ouvi que o elemento card foi clicado, quero executar uma ação
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active') // adiciona uma classe no objeto modal-overlay - add é uma função
        // pega dentro do modal o iframe
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    }) // funcao que recebe parametros, ouvidor de eventos - mouse, digitação, click
    
}

// busca o X que é classe close-modal, ouve o evento de clique e faz a aação de remover a classe active
const closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = `` // para que quando fechar não continue rodando o video

})

