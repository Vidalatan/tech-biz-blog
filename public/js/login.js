document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            switch (response.status) {
                case 404:
                    alert('Incorrect username or password. Please try again')
                    break;
                case 500:
                    alert('Server Error. Please try again later.')
                    break;
                default:
                    alert('Unknown Error')
                    break;
            }
        }
    } else {
        alert('Please enter both your Username and Password')
    }
});

document.querySelector('.signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confpassword = document.querySelector('#confirm-password-signup').value.trim();

    if (username && password && confpassword) {
        if (password === confpassword) {
            const response = await fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({ username, password}),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                switch (response.status) {
                    case 406:
                        alert('Sorry, that username already exists. Please try another...')
                        break;
                
                    default:
                        alert('Action Unsuccessful')
                        break;
                }
            }
        } else {
            alert('Your password and confirmation don\'t match. Please try again.')
        }
    } else {
        alert('Please enter both your Username, Password, and confirm Password')
    }
});

document.querySelector('#nav-home').addEventListener('click', event => {
    event.preventDefault();
    document.location.replace('/')
});

document.querySelector('#nav-dash').addEventListener('click', async (event) => {
    event.preventDefault();
    document.location.replace('/dashboard')
});