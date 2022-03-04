import { desfazer } from "./desfazer.js"
import { pernoite } from "./pernoite.js"
import { locado } from "./locacao.js"
import { limpeza } from "./limpeza.js"
import { faxina } from "./faxina.js"
import { aguardando } from './aguardo.js'
import { start } from "../paginas_js/crono.js"
import { pause } from "../paginas_js/crono.js"
import { pause2 } from "../paginas_js/crono.js"
import { pause3 } from "../paginas_js/crono.js"
import { pause4 } from "../paginas_js/crono.js"
import { reset } from "../paginas_js/crono.js"

var rota = 'rota'

export function triagem(acao, quarto, x, y, z){

    switch(acao){
        case "Disponibilizar Quarto":
            confirm("Certeza que deseja encerrar" + quarto + "?")
            desfazer(quarto, x, y, z)
            pause()
            reset()
            break

        case "Cancelar Reserva":
            desfazer(quarto, x, y, z)
            break

        case "Encerrar":

            if (confirm("Deseja encerrar o quarto " + quarto + "?") == true) {

                desfazer(quarto, x, y, z)

                sessionStorage.setItem('quarto', quarto)
                                
                window.open('../paginas/checkout.html', '_blank');

                aguardando(quarto, x, y, z)

                switch(quarto){
                    case "1":
                        pause()
                        break
                    case "2":
                        pause2()
                        break
                    case "3":
                        pause3()
                        break
                    case "4":
                        pause4()
                        break
                }

              } else {
                // pass
              }

            break

        case "Iniciar Pernoite":
            pernoite(quarto, rota, x, y, z)
            break

        case "Alterar P/ Pernoite":
            pernoite(quarto, rota, x, y, z)
            break

        case "Iniciar Locação":
            locado(quarto, rota, x, y, z)
            break

        case 'Alterar P/ Locação':
            locado(quarto, rota, x, y, z)
            break

        case "Iniciar Limpeza":
            limpeza(quarto, x, y, z)
            reset()
            start()
            break

        case "Iniciar Faxina":
            faxina(quarto, rota, x, y, z)
            reset()
            break
    }
}
