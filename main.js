const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('nome-contato');
const inputNumero = document.getElementById('num-contato');
const numTel = [];
const nomeAdd = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
    });


    function adicionaLinha() {
        if (nomeAdd.map(function(nome) { return nome.toLowerCase();}).includes(inputNome.value.toLowerCase())) {
            alert(`O contato ${inputNome.value} já foi adicionado!`);
        }
        else{
            nomeAdd.push(inputNome.value);
            numTel.push(inputNumero.value);

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`; 
            linha += `<td>${inputNumero.value}</td>`;
            linha += '<tr>';
    
            linhas += linha;

            const corpoTabela = document.querySelector('tbody');
            corpoTabela.innerHTML = linhas;
        }
    };

    function atualizaAgenda() {
        inputNome.value = ''; 
        inputNumero.value = '';
    }
    