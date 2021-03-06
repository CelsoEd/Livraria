let tabelaLivros = document.querySelector('#livros');
tabelaLivros.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    //remove livro da tabela de solicitação de livro
    if (elementoClicado.dataset.type == 'remocao') {
        let livroId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/estande/${livroId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#livro_${livroId}`);
                alert('Por favor recolha seu livro no balcão.');
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});