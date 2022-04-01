import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause, reset, start } from '../contadores/contadorUm.js'
import { listaCamareiras } from "../boxes/box.js"
import { nomeCamareiras } from "../boxes/box.js"

var rota = 'rota'

export function resposta1(status){

    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")

    switch (status) {
        case 'Disponibilizar Quarto':
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            pause()
            reset()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Faxina':
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
            pause()
            reset()
            start()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Limpeza':
            alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
            reset()
            start()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break
        
        case 'Trocar Suíte':
            break

        case 'Encerrar':
            if(confirm(`DESEJA ENCERRAR O QUARTO ${quarto}?`)){
                pause()
                setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                setTimeout(function() {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 2000)
            }
            break
        
        case 'Encerrar Limpeza':
            if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){
                var camareira = prompt('Nome da Camareira:')

                listaCamareiras(camareira)

                console.log('ajustando')

                var nome_camareira = $("#camareira").text()
                
                if(camareira != null){

                    console.log(nome_camareira)

                    pause()
                    reset()
                    setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
                    break

                } else {
                    console.log('cancelado')
                }




            } else {
                console.log('cancelado')
            }


        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    
        default:
            break;
    }
}
