import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause, reset, start} from '../contadores/contadorUm.js'

var rota = 'rota'

// Funções dos Botões Inferiores
export function acaoUm(acao){

    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause()
            reset()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Faxina':
            pause()
            reset()
            start()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Limpeza':
            reset()
            start()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break
        
        case 'Trocar Suíte':
            break
    }
}

export function acaoDois(acao){

    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause()
            reset()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Encerrar':
            if(confirm(`Deseja Encerrar o Quarto ${quarto}?`)){
                pause()
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                aguardando(quarto, flags[0], flags[1], flags[2])
            }
            break
    }
}

export function acaoTres(acao){

    switch(acao){
        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    }
}
