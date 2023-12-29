const r_form = document.getElementById('reg_form');

r_form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('prevent submitting');
})

function containsWhitespace(str) {
    return /\s/.test(str);
}

const str = document.getElementById('reg_str');
const hat_str = document.getElementById('hat');
const language_str = document.getElementById('language');
const nick_str = document.getElementById('nick');
const password_str = document.getElementById('password');
const back_str = document.getElementById('back');
const send_str = document.getElementById('send');

const base = "http://localhost:8080/";

let language = 'RUS';

function changeLanguage() {
    str.innerText = '';
    if (language === 'RUS') {
        hat_str.innerText = 'Sign Up';
        language_str.innerText = 'RUS';
        nick_str.innerText = 'Nick Name';
        password_str.innerText = "Password";
        back_str.innerText = 'Back to Login';
        send_str.value = 'Send';
        language = 'EN';
    } else {
        if (language === 'EN') {
            hat_str.innerText = 'Регистрация';
            language_str.innerText = 'EN';
            nick_str.innerText = 'Погонялово';
            password_str.innerText = 'Пароль';
            back_str.innerText = 'Назад ко входу';
            send_str.value = 'Отправить';
            language = 'RUS';
        }
    }
}

async function reg(var_u, var_p) {
    str.innerText = '';
    if (var_u.length > 16) {
        switch (language) {
            case "RUS":
                str.innerText = 'Имя не должно превышать 16 символов';
                break;
            case "EN":
                str.innerText = 'Nick Name must be less 16 symbols';
                break;
        }
    } else {
        if (var_u.length < 3 || var_p.length < 3) {
            switch (language) {
                case "RUS":
                    str.innerText = 'Слишком короткое имя или пароль'
                    break;
                case "EN":
                    str.innerText = 'Too short Nick Name or Password';
                    break;
            }
        } else {
            if (containsWhitespace(var_u) || containsWhitespace(var_p)) {
                switch (language) {
                    case "RUS":
                        str.innerText = 'Убери пробелы и попробуй снова';
                        break;
                    case "EN":
                        str.innerText = 'Delete whitespaces and try again';
                        break;
                }
            } else {

                const visitorReg = {
                    username: var_u,
                    password: var_p
                };

                const headers = {
                    'Content-Type': 'application/json'
                };

                try {
                    const response_reg = await fetch(`${base}register`, {
                        method: 'POST',
                        body: JSON.stringify(visitorReg),
                        headers: headers
                    });
                    const txt_reg = await response_reg.text();
                    console.log('Успех: ', txt_reg);
                    if (txt_reg === 'busy') {
                        str.innerText = 'Имя занято, попробуй другое';
                    } else {
                        if (txt_reg === 'saved') {
                            const response_come = await fetch(`${base}come`, {
                                method: 'POST',
                                body: `username=${var_u}&password=${var_p}`,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            });
                            const status = response_come.status;
                            if (status == 200) {
                                window.location.replace(base);
                            }
                        }
                    }
                } catch (error) {
                    console.error('Ошибка: ', error);
                }
            }
        }
    }
}