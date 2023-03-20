import "./imagens/github.png"
import "./node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./contato.css"


function first() {

    const catchBtn = document.querySelector('button')

    catchBtn.addEventListener('click', () => {
        const objUsuario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            mensagem: document.getElementById('mensagem').value
        }
        localStorage.setItem('Mensagem', JSON.stringify(objUsuario))
    })
    // localStorage.set('Mensagem')

    // Foram feitas algumas modificações em relação a aula para que funcionasse para o meu código
    function validarFormulario() {
        const form = document.querySelector('form');
        const inputs = form.querySelectorAll('input');

        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }

        });

        return isValid;
    }

    catchBtn.addEventListener('click', () => {

        if (validarFormulario()) {
            enviarParaWhatsApp();

        }
    })


    // Função de máscara de telefone
    function mascaraTelefone(telefone) {
        const texto = telefone.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }

        telefone.value = telefoneFormatado;
    }

    // Adicionar evento de input ao campo de telefone
    const campoTelefone = document.getElementById('telefone');
    campoTelefone.addEventListener('input', function () {
        mascaraTelefone(this);
    });

    function enviarParaWhatsApp() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
        const textoCodificado = encodeURIComponent(texto);
        const numeroWhatsApp = '5581991406467'; // Insira o número de telefone do WhatsApp aqui (apenas números)
        const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

        window.open(url, '_blank');
    }

}

function init() {
    first()
}

window.onload = init 