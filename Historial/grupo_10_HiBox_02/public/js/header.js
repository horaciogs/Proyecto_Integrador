window.onload = function(){
    //JavaScript del Header
    let navMobile = document.querySelector('.nav-header-mobile-sub');
    let buttonBurguer = document.querySelector('.hamburguer-button');
    let buttonClose = document.querySelector('.close-button');

    buttonBurguer.addEventListener('click', function(e){
        navMobile.style.display = "block";
        buttonBurguer.style.display = "none";
        buttonClose.style.display = "block";
    });
    buttonClose.addEventListener('click', function(e){
            navMobile.style.display = "none";
            buttonBurguer.style.display = "block";
            buttonClose.style.display = "none";
        });
}