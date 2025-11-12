document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('register').addEventListener('click', function () {
    window.location.href = '../register/register.html';
});