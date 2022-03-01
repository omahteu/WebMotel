import { desfazer } from "./desfazer.js"
import { pernoite } from "./pernoite.js"
import { locado } from "./locacao.js"
import { limpeza } from "./limpeza.js"
import { faxina } from "./faxina.js"
import { aguardando } from './aguardo.js'

var rota = 'rota'

export function triagem(acao, quarto, x, y, z){

    switch(acao){
        case "Disponibilizar Quarto":
            confirm("Certeza que deseja encerrar" + quarto + "?")
            desfazer(quarto, x, y, z)
            break

        case "Cancelar Reserva":
            desfazer(quarto, x, y, z)
            break

        case "Encerrar":

            if (confirm("Deseja encerrar o quarto " + quarto + "?") == true) {

                // Verificar se já posso apagar os dados aqui, ou só depois

                desfazer(quarto, x, y, z)

                sessionStorage.setItem('quarto', quarto)
                                
                window.open('../paginas/checkout.html', '_blank');
                aguardando(quarto, x, y, z)
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
            break

        case "Iniciar Faxina":
            faxina(quarto, rota, x, y, z)
            break
    }
}
