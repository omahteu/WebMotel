$(document).ready(function(){
    var as = verificarIg()
    console.log(verificarIg())

})











$("#alteraFormPostIg").click(function(){
    atualizaIg()
    verificarIg()
})

async function atualizaIg(){
    const response = await fetch("https://defmoteapi.herokuapp.com/igs/")
    const data = await response.json()

    data.forEach(elemento => {

        $("#social").val(elemento.social)
        $("#fantasia").val(elemento.fantasia)
        $("#cnpj").val(elemento.cnpj)
        $("#cidade").val(elemento.cidade)
        $("#endereco").val(elemento.endereco)
        $("#numero").val(elemento.numero)
        $("#bairro").val(elemento.bairro)
        $("#telefone").val(elemento.telefone)
        $("#telefone2").val(elemento.telefone2)
        $("#telefone3").val(elemento.telefone3)

    });

}

function verificarIg(){

    var existe = false
    
    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){
        var existe = resultado.length
        return String(existe)

    })
}