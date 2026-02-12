const userEmail = document.getElementById('user-email')

const userPassword = document.getElementById('user-password')

const authForm = document.querySelector(".auth-form")

const authSubmission = document.getElementById('auth-submission')



// If the promise is fulfilled, saves the response's data in Session, then redirects the user to homepage.
// If the promise is rejected, displays an error message.
authSubmission.addEventListener('click', (e) => {
    e.preventDefault()
    const loginRequest = postCredentialsToAPI("http://127.0.0.1:5678/api/users/login", userEmail.value, userPassword.value)
    loginRequest
        .then(data => {
            window.sessionStorage.setItem('userId', data.userId)
            window.sessionStorage.setItem('token', data.token)
            window.location = "./../index.html"
        })
        .catch((error) => {
            console.error(error)
            flashError('authError', authForm)
        })
})

