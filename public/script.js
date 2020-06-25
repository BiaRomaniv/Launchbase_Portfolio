const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener("click", function () {
        const linkId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `http://rocketseat.com.br/${linkId}`
    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = `` // para que quando fechar não continue rodando o video

})

const maximizeModal = document.querySelector(".maximize-modal").addEventListener("click", function () {
    modal.classList.toggle("maximize")

})
