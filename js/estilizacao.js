//BORDA LEVAR/COMER AQUI
const levar = document.querySelectorAll('.comerAqui')
levar.forEach(e => {

    e.addEventListener('click', () => {
        removeEfeito()
        viagem = e.getAttribute('name')

        addEfeito(e)
    })
})

function addEfeito(tag) {
    tag.classList.add('selecionado')
}

function removeEfeito() {
    levar.forEach(e => {
        e.classList.remove('selecionado')
    })
}
//

const botoes = document.querySelectorAll('.mandarPedido')


botoes.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.viaCliente').style.display = 'block'
    })
})



document.querySelector('#fechaViaCliente').addEventListener('click', () => {
    document.querySelector('.viaCliente').style.display = 'none'
})