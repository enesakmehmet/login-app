const validUsername = "admin";
const validPassword = "1234";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message")

togglePassword.addEventListener("click", () => {
    const type = 
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    togglePassword.innerHTML = 
        type === "password"
            ? '<i class="bi bi-eye-fill"></i>'
            : '<i class="bi bi-eye-slash-fill"></i>';
});

loginForm.addEventListener("submit", function (event) { 
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === validUsername && password === validPassword) {
        message.className = "text-success"
        message.textContent = "Hoş geldiniz, " + username + "!"
    } else {
        message.className = "text-danger"
        message.textContent = "Kullanıcı adı veya şifre yanlış.";
    }
});