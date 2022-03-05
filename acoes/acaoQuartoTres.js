import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { pause3, reset3, start3} from '../contadores/contadorTres.js'
import { modos } from "../boxes/box.js"

var rota = 'rota'
var quartos = modos.slice(6, 9)

// Botões Inferiores
$(`#${quartos[0]}`).click(function(){

    // Parâmetros e Chamada de Função
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause3()
            reset3()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Faxina':
            pause3()
            reset3()
            start3()
            setTimeout(function() {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Iniciar Limpeza':
            reset3()
            start3()
            setTimeout(function() {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            break
        
        case 'Trocar Suíte':
            break
    }
})

$(`#${quartos[1]}`).click(function(){

    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    var quarto = $("#numquarto").text()

    switch(acao){
        case 'Disponibilizar Quarto':
            pause3()
            reset3()
            setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            break

        case 'Encerrar':
            if(confirm(`Deseja Encerrar o Quarto ${quarto}?`)){
                pause3()
                sessionStorage.setItem('quarto', quarto)
                window.open('../paginas/checkout.html', '_blank')
                aguardando(quarto, flags[0], flags[1], flags[2])
            }
            break
    }
})

$(`#${quartos[2]}`).click(function(){

    var acao = $(this).val()
    
    switch(acao){
        case 'Apagar Luz':
            break

        case 'Ligar Luz':
            break
    }
})
