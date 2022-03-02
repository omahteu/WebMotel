import { locado } from "../tags/locacao.js"
import { modos } from "../boxes/box.js"
import { index } from "../tags/particao.js"
import { start } from "../paginas_js/crono.js"
import { start2 } from "../paginas_js/crono.js"
import { start3 } from "../paginas_js/crono.js"


$(".locado").click(function(){
    var quarto = $(this).attr('name')
    var rota = $(this).attr('class')

    if(confirm('É uma troca de suíte?') == true){
        console.log('Troca de Suíte')
    } else {
        switch(quarto){
            case '1':
                var flags = modos.slice(0, 3)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                index()
                start()
                break

            case '2':
                var flags = modos.slice(3, 6)
                locado(quarto, rota, flags[0], flags[1], flags[2])
                index()
                start2()
                break

            case '3':
                var flags = modos.slice(6, 9)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                index()
                start3()
                break

            case '4':
                var flags = modos.slice(9, 12)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                index()
                break
        }
    }


    



})
