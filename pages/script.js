const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Registration form submission
document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const age = document.getElementById('regAge').value;

    const user = {
        name,
        email,
        password,
        age
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Kayıt başarılı! Artık giriş yapabilirsiniz.');
    container.classList.remove("active");
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Redirect to another page or perform actions for a successful login
        window.location.href = '../index.html'; // Example redirection
    } else {
        alert('Email veya şifre yanlış!');
    }
});
