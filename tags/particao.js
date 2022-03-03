export function index(){

    // Data e Hora
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var datahora = String(hora) + ':' + String(minutos)

    // Valor do Quarto
    var valor = $("#valor-quarto").text()

    // Quarto
    var quarto = $("#numquarto").text()

    // Agrupando Dados
    var dados = {
        datahora: datahora,
        valor: valor,
        quarto: quarto
    }



    $.post("https://defmoteapi.herokuapp.com/header/", dados, function(){
        
    })

}
