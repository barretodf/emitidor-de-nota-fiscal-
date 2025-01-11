const { ipcRenderer } = require('electron');

const produtoIdInput = document.getElementById('produto-id');
const adicionarBtn = document.getElementById('adicionar-produto');
const listaProdutos = document.getElementById('lista-produtos');
const totalDiv = document.getElementById('total');

let total = 0;

adicionarBtn.addEventListener('click', () => {
    const produtoId = produtoIdInput.value;
    if (!produtoId) return alert('Digite o código do produto.');

    ipcRenderer.send('buscar-produto', produtoId);
});

ipcRenderer.on('produto-detalhes', (event, produto) => {
    if (produto.error) {
        alert(produto.error);
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `<td>${produto.descricao}</td><td>R$ ${produto.valor.toFixed(2)}</td>`;
    listaProdutos.appendChild(row);

    total += produto.valor;
    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
});
