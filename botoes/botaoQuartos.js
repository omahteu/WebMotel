$(".tarja").click(function(){
    var botao = $(this).text()

    switch (botao) {
        case 'Quartos':
            window.open('../paginas/quartos.html', '_blank');
            break;
        
        case 'Cadastros':
            window.open('../paginas/cadastros.html', '_blank');
            break

        case 'Relatórios':
            window.open('../paginas/visualizar.html', '_blank');
            break

        case 'Caixa':
            window.open('../paginas/caixa.html', '_blank');
            break
    
        default:
            break;
    }
})
