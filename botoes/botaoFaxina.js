import { faxina } from "../tags/faxina.js"
import { modos } from "../boxes/box.js"
import { index } from "../tags/particao.js"
import { start } from "../paginas_js/crono.js"
import { start2 } from "../paginas_js/crono.js"
import { start3 } from "../paginas_js/crono.js"
import { start4 } from "../paginas_js/crono.js"

$(".faxina").click(function(){
    var quarto = $(this).attr('name')
    var rota = $(this).attr('class')

    switch(quarto){
        case '1':
            var flags = modos.slice(0, 3)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            index()
            start()
            break
        case '2':
            var flags = modos.slice(3, 6)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            index()
            start2()
            break

        case '3':
            var flags = modos.slice(6, 9)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            index()
            start3()
            break

        case '4':
            var flags = modos.slice(9, 12)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            index()
            start4()
            break
    }
})
