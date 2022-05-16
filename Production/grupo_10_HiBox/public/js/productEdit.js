
window.onload = function() {
    let form = document.querySelector('.form-editProduct');
    
    let regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regDetalle = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let errors = [];
        
        let nombre = document.querySelector('#nombre');
        let categorias = document.querySelector('#categorias');
        let subCategoria = document.querySelector('#subCategoria');
        let precio = document.querySelector('#precio');
        let precioAnterior = document.querySelector('#precioAnterior');
        let estado = document.querySelector('#estado');
        let img = document.querySelector('#img');
        let detalle = document.querySelector('#detalle');
    

        if (nombre.value == "" || !regNombre.test(nombre.value) || !nombre.value.trim()) {
            errors.push('Por favor verificar el campo Nombre');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        };
        if (categorias.value == "") {
            errors.push('Por favor verificar el campo Cateogiras');
            categorias.classList.add('is-invalid');
        } else {
            categorias.classList.add('is-valid');
            categorias.classList.remove('is-invalid');
        };
        if (subCategoria.value == "") {
            errors.push('Por favor verificar el campo Sub Categoria');
            subCategoria.classList.add('is-invalid');
        } else {
            subCategoria.classList.add('is-valid');
            subCategoria.classList.remove('is-invalid');
        };
        if (precio.value == "" || precio.value == 0) {
            errors.push('Por favor verificar el campo Precio');
            precio.classList.add('is-invalid');
        } else {
            precio.classList.add('is-valid');
            precio.classList.remove('is-invalid');
        };
        if (precioAnterior.value == "" ) {
            errors.push('Por favor verificar el campo Precio Anterior');
            precioAnterior.classList.add('is-invalid');
        } else {
            precioAnterior.classList.add('is-valid');
            precioAnterior.classList.remove('is-invalid');
        };
        if (estado.value == "") {
            errors.push('Por favor verificar el campo Sub Categoria');
            estado.classList.add('is-invalid');
        } else {
            estado.classList.add('is-valid');
            estado.classList.remove('is-invalid');
        };
        if (detalle.value == "" || !regDetalle.test(detalle.value) || !detalle.value.trim()) {
            errors.push('Por favor verificar el campo Detalle');
            detalle.classList.add('is-invalid');
        } else {
            detalle.classList.add('is-valid');
            detalle.classList.remove('is-invalid');
        };
        
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            
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
