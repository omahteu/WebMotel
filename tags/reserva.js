export function reservado(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#1E90FF",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Iniciar Locação')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Cancelar Reserva')

    $("#numquarto").text(q)
    $("#tipo").text('reservado')
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#imagemQuarto" + q).css('border', '2px solid rgb(30, 144, 255)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(30, 144, 255), 0 0 1em #000')
}
