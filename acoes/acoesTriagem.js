import { modos } from '../boxes/box.js'
import { resposta2, resposta3, resposta4 } from './acoesMain.js'
import { resposta1 } from './acaorespostaum.js'

$("[name=acoes]").click(function(){
    
    let chave = this.id
    var status = $(this).val()

    if(modos.slice(0, 3).includes(chave)){
        // QUARTO 1
        resposta1(status)

    } else if(modos.slice(3, 6).includes(chave)){
        // QUARTO 2
        resposta2(status)

    } else if(modos.slice(6, 9).includes(chave)){
        // QUARTO 3
        resposta3(status)

    } else if(modos.slice(9, 12).includes(chave)){
        // QUARTO 4
        resposta4(status)

    } else {
        console.log('Quarto não Configurado')
    }
    
})
