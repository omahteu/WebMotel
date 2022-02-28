import { reservado } from "../tags/reserva.js"
import { modos } from "../boxes/box.js"

$(".reservado").click(function(){
    var quarto = $(this).attr('name')
    // var tipoQuarto = $(this).attr('class')

    // console.log(tipoQuarto)
    
    switch(quarto){
        case '1':
            var flags = modos.slice(0, 3)
            reservado(quarto, flags[0], flags[1], flags[2])
            break
        case '2':
            var flags = modos.slice(3, 6)
            reservado(quarto, flags[0], flags[1], flags[2])
            break
    }
})
