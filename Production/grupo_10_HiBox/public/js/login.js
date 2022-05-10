
window.onload = function() {
    let form = document.querySelector('.form-login');
    
    let regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    form.addEventListener('submit', (e) => {
        
        let errors = [];
        
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
    
        if (!regUserEmail.test(email.value) || !email.value.trim() || email.value == '') {
            errors.push('Por favor verificar el campo Email');
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
            email.classList.remove('is-invalid');
        };
        if (!password.value.trim() || password.value == '' || password.value.length < 6) {
            errors.push('Por favor verificar el campo Contraseña');
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
            password.classList.remove('is-invalid');
        };
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `  ${errors[i]} <br>`;
            };
        }else{
            //alert('La validación fué exitosa')
            form.submit();
        }

    });
}
