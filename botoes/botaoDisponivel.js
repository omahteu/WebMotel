$(".disponivel").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            disponivel(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            console.log(boxDois)
            disponivel(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})
