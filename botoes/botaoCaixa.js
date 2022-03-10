$(document).ready(function(){
    
    var nomeUsuario = sessionStorage.getItem('nome')
    $("#usuario").val(nomeUsuario)

})

$("#abrirCaixa").click(function(){

    var usuario = $("#usuario").val()

    var dataEntrada = new Date();
    var dia = dataEntrada.getDate()
    var mes = dataEntrada.getMonth()
    var ano = dataEntrada.getFullYear()
    let dataAtual = `${String(dia)}/${String(mes)}/${String(ano)}`


    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    let horaAtual = `${String(hora)}:${String(minutos)}`


    console.log(horaAtual)
})