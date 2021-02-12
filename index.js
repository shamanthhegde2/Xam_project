let login = document.querySelector('.login-part')
let signup = document.querySelector('.signup-part')
let login_link = document.querySelector('.login-link')
let signup_link = document.querySelector('.signup-link')
signup.style.display = 'none'

function login_switch() {
  login.style.display = 'flex'
  signup.style.display = 'none'
}

function signup_switch() {
  signup.style.display = 'flex'
  login.style.display = 'none'
}
