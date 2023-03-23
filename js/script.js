const plus = document.querySelectorAll('.plus')
const card1 = document.querySelectorAll('.card__overlay')
const card2 = document.querySelectorAll('.card__header')

const botaoP1 = document.querySelector('#pratoUm')
const botaoP2 = document.querySelector('#pratoDois')
const botaoP3 = document.querySelector('#pratoTres')

pratos = {
    prato1: function () { revelaOculta(card1[0], card2[0]) },
    prato2: function () { revelaOculta(card1[1], card2[1]) },
    prato3: function () { revelaOculta(card1[2], card2[2]) }

}

plus.forEach((e) => {
    e.addEventListener('click', () => {
        var revelaPrato = pratos[e.getAttribute('name')]
        revelaPrato()
    })
})


function revelaOculta(card1, card2) {
    if (!card1.classList.contains('active') && !card2.classList.contains('active')) {
        card1.classList.add('active')
        card2.classList.add('active')
    } else {
        card1.classList.remove('active')
        card2.classList.remove('active')
    }
}

botaoP1.addEventListener('click', () => {
    pegaDados('#prato1')

})

botaoP2.addEventListener('click', () => {
    pegaDados('#prato2')

})

botaoP3.addEventListener('click', () => {
    pegaDados('#prato3')

})



function pegaDados(input) {
    const prato1 = document.querySelector(input);
    const inputs = prato1.querySelectorAll('input');
    const titulo = prato1.querySelector('.card__title')

    const prato = titulo.textContent
    const name = inputs[0].value
    const telef = inputs[1].value

    postar(prato, name, telef, viagem)

}

function postar(prato, nome, telefone, viagem) {

    fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "nome": nome,
            "telefone": telefone,
            "nomePrato": prato,
            "viagem": viagem,
            "hrRetirada": "22:30"

        })
    })
        .then(response => {
            if (response.ok) {
                console.log('postado com sucesso');
            } else {
                throw new Error('Erro ao processar a solicitação');
            }
        })

}





