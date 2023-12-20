const r_form = document.getElementById('reg_form');

r_form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('prevent submitting');
})

function containsWhitespace(str) {
    return /\s/.test(str);
}

const str = document.getElementById('reg_str');

const base = "http://localhost:8080/";

async function reg(var_u, var_p) {
    str.innerText = '';
    if (var_u.length > 16) {
        str.innerText = 'Имя не должно превышать 16 символов'
    } else {
        if (var_u.length < 3 || var_p.length < 3) {
            str.innerText = 'Слишком короткое имя или пароль'
        } else {
            if (containsWhitespace(var_u) || containsWhitespace(var_p)) {
                str.innerText = 'Убери пробелы и попробуй снова';
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