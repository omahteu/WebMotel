$("#finalizar").click(function(){
    
    var numero_quarto = JSON.parse(sessionStorage.getItem('Encerrando'))
    var codigo_quarto = JSON.parse(localStorage.getItem("quarto" + numero_quarto))
    var dados_head = JSON.parse(localStorage.getItem(codigo_quarto))
    var dados_produto = JSON.parse(localStorage.getItem('produtos'))

    //Sconsole.log(codigo_quarto)
    //console.log(dados_head)
    //

    //localStorage.removeItem(codigo_quarto) 
    //localStorage.removeItem("quarto" + numero_quarto) 

    //var dados = dados_produto.filter(quartos => quartos.quarto == String("quarto" + numero_quarto))

    

    

    dados_produto.forEach(function(quarto){
        console.log(quarto)
    })

    let aluno = dados_produto.find(function(aluno) {
        return aluno.quarto === '2';
      });
})