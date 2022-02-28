import { triagem } from "../tags/triagem.js"
import { modos } from "../boxes/box.js"

// Botões de Ações
$("#" + modos[9]).click(function(){

    // Parâmetros e Chamada de Função
    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + modos[10]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + modos[11]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})
