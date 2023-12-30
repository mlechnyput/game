const hat_str = document.getElementById('hat');
const language_str = document.getElementById('language');
const nick_str = document.getElementById('nick');
const password_str = document.getElementById('password');
const new_str = document.getElementById('new');
const send_str = document.getElementById('send');

let language = 'RUS';

function changeLanguage() {
    if (language === 'RUS') {
        hat_str.innerText = 'Log In';
        language_str.innerText = 'RUS';
        nick_str.innerText = 'Nickname';
        password_str.innerText = "Password";
        new_str.innerText = 'Sign Up';
        send_str.value = 'Send';
        language = 'EN';
    } else {
        if (language === 'EN') {
            hat_str.innerText = 'Вход';
            language_str.innerText = 'EN';
            nick_str.innerText = 'Погонялово';
            password_str.innerText = 'Пароль';
            new_str.innerText = 'Зарегистрировать новое погонялово';
            send_str.value = 'Войти';
            language = 'RUS';
        }
    }
}