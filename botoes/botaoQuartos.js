$(".tarja").click(function(){
    var botao = $(this).text()

    switch (botao) {
        case 'Quartos':
            $(location).attr('href', '../paginas/quartos.html')
            break;
        
        case 'Cadastros':
            $(location).attr('href', '../paginas/cadastros.html')
            break

        case 'Relatórios':
            $(location).attr('href', '../paginas/visualizar.html')
            break

        case 'Caixa':
            $(location).attr('href', '../paginas/caixa.html')
            break
        
        case 'Configurações':
            $(location).attr('href', '../paginas/configuracoes.html')
            break
    
        default:
            break;
    }
})
