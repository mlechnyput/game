async function reg() {

    const urlReg = "http://localhost:8080/register"

    const visitorReg = {
        // username: $('#reg_username').val(),
        // password: $('#reg_password').val()
        username:'Vasya',
        password:'mgh'
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const response = await fetch(urlReg, {
            method: 'POST',
            body: JSON.stringify(visitorReg),
            headers: headers
        })
        const txt=await response.text()
        console.log('Успех: ', txt)
    }catch (error){
        console.error('Ошибка: ',error)
    }
}

