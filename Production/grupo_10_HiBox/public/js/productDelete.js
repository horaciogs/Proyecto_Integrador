
window.addEventListener('load', function(){
    console.log('conected!')
    let deleteProduct = document.querySelectorAll('.form-adminProduct');
   
    deleteProduct.forEach(form => {
        form.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: 'Estás por borrar un Producto',
                text: "¡Recuerda que si lo borras no lo podrás recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7d92a5',
                cancelButtonColor: '#fa5f63',
                confirmButtonText: 'Borrar Producto'
              }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
              })
            
        })
    })
});