$(document).ready(function(){

    bloqueioRelatorios()

})


function bloqueioRelatorios(){
    let info = localStorage.getItem("usuarioLogado")

    if(info === 'caixa'){
        
        $("#cardOcupacoes").css('display', 'none')
        $("#cardSaida").css('display', 'none')
        $("#cardQuartos").css('display', 'none')
        $("#cardCadastroQuarto").css('display', 'none')
        $("#cardCadastroIg").css('display', 'none')
        $("#cardCadastroEmail").css('display', 'none')
        $("#cardCadastroCamareira").css('display', 'none')
        $("#cardCadastroPernoite").css('display', 'none')
    }
}
