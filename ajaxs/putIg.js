$("#alteraFormPostIg").click(function(){

    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){
        if(resultado.length != 0){
            atualizaIg()
            //verificarIg()
        } else {
            alert("Nenhum dado cadastrado")
        }
    })
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

    document.getElementById('salvarFormPostIg').id = 'alteraFormPostIg'
    document.getElementById('alteraFormPostIg').value = 'Atualizar'

}

function verificarIg(){
    
    $.get("https://defmoteapi.herokuapp.com/igs/", function(resultado){
        var existe = String(resultado.length)

        if(existe === '80'){
            var btn = document.getElementById('salvarFormPostIg').id = 'alteraFormPostIg'
            document.getElementById('alteraFormPostIg').value = 'Atualizar'
        } else {
            alert("Nenhum dado cadastrado!")
        }



    })
}