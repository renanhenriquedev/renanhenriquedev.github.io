
const catchBtn = document.querySelector('button')

catchBtn.addEventListener('click', () => {
    const objUsuario = {
        nome : document.getElementById('nome').value,
        email : document.getElementById('email').value,
        telefone : document.getElementById('telefone').value,
        mensagem : document.getElementById('mensagem').value
    }
    localStorage.setItem('Mensagem', JSON.stringify(objUsuario) )
})
// localStorage.set('Mensagem')