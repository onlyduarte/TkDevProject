// import { auth } from "conect.js"
const email = document.querySelector('#email')
const senha = document.querySelector('#password')
const senhaS = document.querySelector('#spassword')
const cadastro = document.querySelector('.logar')

// const handleRegister = auth.

cadastro.addEventListener('click', Registro)

function Registro() {
  let email1 = email.value
  let senha1 = senha.value
  let senha2 = senhaS.value
  console.log(email1) 
  console.log(senha1)
  console.log(senha2)
}