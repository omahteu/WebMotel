$(document).ready(function(){

    $.get("https://drf-motel.herokuapp.com/quartos/", function(resultado){

        for(var i = 0; i < resultado.length; i++){

            var num = resultado[i].numero
   
            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num

            document.getElementById('quarto').id = "quarto" + num

        }
    })
})
