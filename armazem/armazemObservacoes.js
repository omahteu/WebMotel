$("#registrar").click(function(){
    

    registroObs()
})

function registroObs(){

    var quarto =  $("#numquarto").text()
    var pessoas = $("#pes").val()
    var observacao = $("#muralObs").val()

    dados = {
        quarto: quarto,
        pessoa: pessoas,
        texto: observacao
    }

    console.log(dados)
    
    $.post("https://defmoteapi.herokuapp.com/painel/", dados, () => {
        alert('OBS')
        
    })


    document.getElementById('painel').reset()
}