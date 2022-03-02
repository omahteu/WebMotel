import { precos } from "../boxes/box.js";
import { timer } from "../paginas_js/crono.js"


export function locado(q, t,  x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FF0000",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

    // $("#" + x).css('visibility', 'visible')
    // $("#" + x).val('Alterar P/ Pernoite')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Trocar Suíte')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    if(t != 'btn locado'){
        $("#" + z).css('visibility', 'hidden')
        $("#" + z).val('Cancelar Reserva')
    } 

    var tipoQuarto = $('#tipo' + q).text()
    console.log(tipoQuarto)
    

    switch (tipoQuarto){
        case 'AR':
            $("#valor-quarto").text(precos[1].locacaoAr)
            break
        case 'VENTILADOR':
            $("#valor-quarto").text(precos[0].locacaoVentilador)
            break
    }

    $("#numquarto").text(q)
    $("#tipo").text('locado')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
    $("#imagemQuarto" + q).css('border', '2px solid rgb(255, 0, 0)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(255, 0, 0), 0 0 1em #000')

    timer(q)
}


