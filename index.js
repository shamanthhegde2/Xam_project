let login = document.querySelector('.login-part')
let signup = document.querySelector('.signup-part')
let login_link = document.querySelector('.login-link')
let signup_link = document.querySelector('.signup-link')

document
  .querySelector('.show_password')
  .addEventListener('mousedown', function show_password() {
    let x = document.getElementById('login_Password')
    x.type = 'text'
  })

document
  .querySelector('.show_password')
  .addEventListener('mouseup', function show_password() {
    let x = document.getElementById('login_Password')
    x.type = 'password'
  })
signup.style.display = 'none'

function login_switch() {
  login.style.display = 'flex'
  signup.style.display = 'none'
}

function signup_switch() {
  signup.style.display = 'flex'
  login.style.display = 'none'
}

let validation = document.querySelector('.need_validation')

validation.addEventListener('submit', function (event) {
  let x = document.querySelector('#sign_Password')
  let y = document.querySelector('#ConfirmPassword')
  if (x.value != y.value) {
    event.preventDefault()
    event.stopPropagation()
    x.classList.add('red_border')
    y.classList.add('red_border')
    x.value = ''
    y.value = ''
    setTimeout(function () {
      x.classList.remove('red_border')
      y.classList.remove('red_border')
    }, 2000)
  }
})
