export function disponivel(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#008B8B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#numquarto").text(q)
    $("#tipo").text('disponivel')
}
