$(document).ready(function(){

    window.location = "../index.html"
    
    // var usuarioLogado = localStorage.getItem('usuarioLogado');

    // if (!usuarioLogado) {
    //     window.location = "../index.html"
    // }

})

$("#logout").click(function(){

    localStorage.removeItem('usuarioLogado') 

    document.location.reload(true)
})
