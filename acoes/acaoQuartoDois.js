import { triagem } from "../tags/triagem.js"
import { quartodois } from "../boxes/box.js"

// Botões de Ações
$("#" + quartodois[0]).click(function(){

    // Parâmetros e Chamada de Função
    var acao = $(this).val()
    console.log(acao)
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + quartodois[1]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + quartodois[2]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})
