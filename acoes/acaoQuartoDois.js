import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause2, reset2, start2} from '../contadores/contadorDois.js'
import { quartodois } from "../boxes/box.js"

var rota = 'rota'

// Botões Inferiores
$(`#${quartodois[0]}`).click(function(){

    // Parâmetros e Chamada de Função
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause2()
            reset2()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Faxina':
            pause2()
            reset2()
            start2()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Limpeza':
            reset2()
            start2()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break
        
        case 'Trocar Suíte':
            break
    }
})

$(`#${quartodois[1]}`).click(function(){

    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause2()
            reset2()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Encerrar':
            if(confirm(`Deseja Encerrar o Quarto ${quarto}?`)){
                pause2()
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                aguardando(quarto, flags[0], flags[1], flags[2])
            }
            break
    }
})

$(`#${quartodois[2]}`).click(function(){

    var acao = $(this).val()
    // var quarto = $("#numquarto").text()
    // var flags = $("#intervalo").text().split(",")
    
    switch(acao){
        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    }
})
