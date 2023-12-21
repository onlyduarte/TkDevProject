const password = document.querySelector("#password")
const mostrarSenha = document.querySelector("#mostrarSenha")
const olho = document.querySelector("#imgOlho")

let check = false

olho.addEventListener('click', () => {
    check = !check
    if(check) {
        olho.src = 'images/visualizar.png'  
    }else{
        olho.src = 'images/olho.png'
    }
})

mostrarSenha.addEventListener("change", function(){
    const estadoAtualPassword = password.getAttribute("type") === "password" ? "text" : "password"
    password.setAttribute("type", estadoAtualPassword)   
})
