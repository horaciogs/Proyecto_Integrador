
window.addEventListener('load', function(){
    console.log('conected!')
    let deleteUser = document.querySelectorAll('.form-adminProduct');
   
    deleteUser.forEach(form => {
        form.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: 'Estás por borrar un Usuario',
                text: "¡Recuerda que si lo borras no lo podrás recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7d92a5',
                cancelButtonColor: '#fa5f63',
                confirmButtonText: 'Borrar Usuario'
              }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
              })
            
        })
    })
});