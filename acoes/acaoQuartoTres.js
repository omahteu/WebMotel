import { triagem } from "../tags/triagem.js"
import { modos } from "../boxes/box.js"

// Botões de Ações
$("#" + modos[6]).click(function(){

    // Parâmetros e Chamada de Função
    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + modos[7]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + modos[8]).click(function(){

    var acao = $(this).val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})
