import { dataAtual } from '../boxes/box.js'
import { rg } from '../boxes/box.js'
import { horaSaida } from '../boxes/box.js'
import { liviaExclui } from '../boxes/box.js'

$("#finalizar").click(function(){
    
    zerarComanda()

    // zerarHeader()

    // zerarPatio()

    // sessionStorage.clear()

    // window.close()

})

function registroOcupacao(quarto, entrada){

    var total = $("#totalGeral").text()

    var box = {
        data: dataAtual(),
        codigo: rg(),
        quarto: quarto,
        entrada: entrada,
        saida: horaSaida(),
        total: total,
    }

    $.post("http://127.0.0.1:8000/ocupacoes/", box, function(){})
}

function zerarComanda(){
    $.get("http://127.0.0.1:8000/comanda/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id

            liviaExclui(identificador)

        }

        console.log('Comanda Zerada')
    })
}

function zerarHeader(){
    $.get("http://127.0.0.1:8000/header/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id
            var quarto = dados[i].quarto
            var entrada = dados[i].datahora

            liviaExclui(identificador)

        }

        registroOcupacao(quarto, entrada)

    })
}

function zerarPatio(){
    $.get("http://127.0.0.1:8000/patio/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id

            liviaExclui(identificador)

        }
    })
}