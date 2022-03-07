export function limpeza(q, t, x, y, z) {

    // CSS
    $("#quarto" + q).css({
        "background-color": "#F0E68C",
        "opacity": 0.5})
    
    $("[name=form_main" + q + "]").css({
        'margin-bottom': '-60px',
        'padding-top': '50px'
    })

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // Botões Inferiores
    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    if(t != 'btn limpeza'){
        $("#" + y).css('visibility', 'hidden')
        $("#" + y).val('Alterar P/ Locação')

        $("#" + z).css('visibility', 'hidden')
        $("#" + z).val('Cancelar Reserva')
    }

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('limpeza')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
    $("#imagemQuarto" + q).css('border', '2px solid rgb(240, 230, 140)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(240, 230, 140), 0 0 1em #000')
}
