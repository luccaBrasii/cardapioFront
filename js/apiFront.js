const pessoas = []


/*setInterval(() => {
    atualizarPagina()
}, 15000)
*/
fetch('http://localhost:3000/api', {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (json) {

        json.map(e => {
            pessoas.push(e)
        })


        pessoas.map(e => {
            criaPedido(e)
        })
    })





function criaPedido(val) {
    const container = document.querySelector('.pedidos')

    container.innerHTML += `
    <div class="pedido-only">
            <div>
                <img class="prato" src="./img/img1.avif">
            </div>
            <div class="info-pedido">
                <h1>Pedido <span class='idPedido'>`+ val.id + `</span> | ` + val.nomePrato + `</h1>
                <h3>Nome</h3>
                <p>`+ val.nome + `</p>
                <h3>Telefone</h3>
                <p>`+ val.telefone + `</p>
                <h3>Horario de retirada</h3>
                <p>`+ val.hrRetirada + `</p>
            </div>
            <div class="verificado">
                <label style="margin-right: 10px;">Concluir pedido</label>
                <img class="ok" src="./img/verificado.png">
            </div>
        </div>
    
    `

    pegaID()

}

function pegaID() {
    const elementos = document.querySelectorAll('.ok')
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            const idPedido = elemento.closest('.pedido-only').querySelector('.idPedido').textContent;

            deletaPedido(idPedido)
            atualizarPagina()
        });
    });
}

function deletaPedido(id) {
    fetch('/api/registros/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (response.ok) {
                console.log('Registro deletado com sucesso.');
            } else {
                console.error('Erro ao deletar registro.');
            }
        })
        .catch(error => console.error('Erro ao fazer a requisição DELETE:', error));
}

function atualizarPagina() {
    location.reload();
}
