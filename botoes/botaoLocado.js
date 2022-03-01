import { locado } from "../tags/locacao.js"
import { modos } from "../boxes/box.js"
import { index } from "../tags/particao.js"

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
                break

            case '2':
                var flags = modos.slice(3, 6)
                locado(quarto, rota, flags[0], flags[1], flags[2])
                index()
                break

            case '3':
                var flags = modos.slice(6, 9)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                index()
                break

            case '4':
                var flags = modos.slice(9, 12)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                index()
                break
        }
    }
})
