export function manutencao(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#A9A9A9",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Faxina')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Disponibilizar Quarto')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Ligar Luz')

    $("#numquarto").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
    $("#imagemQuarto" + q).css('border', '2px solid rgb(169, 169, 169)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(169, 169, 169), 0 0 1em #000')
}
