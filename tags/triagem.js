import { desfazer } from "./desfazer.js"
import { pernoite } from "./pernoite.js"
import { locado } from "./locacao.js"
import { limpeza } from "./limpeza.js"
import { faxina } from "./faxina.js"
import { aguardando } from './aguardo.js'
//import * as contadorUm from '../contadores/contadorUm.js'
import { start, pause, reset, timer, returnData} from '../contadores/contadorUm.js'
import * as contadorDois from '../contadores/contadorDois.js'
import * as contadorTres from '../contadores/contadorTres.js'
import * as contadorQuatro from '../contadores/contadorQuatro.js'

var rota = 'rota'

export function triagem(acao, quarto, x, y, z){

    switch(acao){
        case "Disponibilizar Quarto":
            pause()

            console.log('ate aqui')
            reset()
            console.log('depois')
            confirm("Certeza que deseja encerrar" + quarto + "?")
            desfazer(quarto, x, y, z)
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

                // switch(quarto){
                //     case "1":
                //         pause()
                //         break
                //     case "2":
                //         contadorDois.pause2()
                //         break
                //     case "3":
                //         contadorTres.pause3()
                //         break
                //     case "4":
                //         contadorQuatro.pause4()
                //         break
                // }
                

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
            switch(quarto){
                case '1':
                    reset()
                    start()
                    break
                
                case '2':
                    contadorDois.reset2()
                    contadorDois.start2()
                    break

                case '3':
                    contadorTres.reset3()
                    contadorTres.start3()
                    break

                case '4':
                    contadorQuatro.reset4()
                    contadorQuatro.start4()
                    break
            }
            break

        case "Iniciar Faxina":
            faxina(quarto, rota, x, y, z)
            switch(quarto){
                case '1':
                    reset()
                    start()
                    break
                
                case '2':
                    contadorDois.reset2()
                    break

                case '3':
                    contadorTres.reset3()
                    break

                case '4':
                    contadorQuatro.reset4()
                    break
            }
            break
    }

}
