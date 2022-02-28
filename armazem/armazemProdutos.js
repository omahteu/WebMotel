$("#salvar").click(function(){

	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	// Verificação se o quarto está em Pernoite ou Locação
	if(tipos.includes(tipo)){
		registroProduto()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})

function registroProduto(){
	
	// Parâmetros
	var descricao = $("#des").val()
    var quantidade = $("#qtd").val()
	var valorTotal = $("#tot").val()
    var quarto =  $("#numquarto").text()
    var valorUnitario = $("#vun").val()
	var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var datahora = String(hora) + ':' + String(minutos)
	var valor = $("#valor-quarto").text()
    
    // Objeto com Parãmtros
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: datahora,
		valor_quarto: valor
	}

	$.post("http://127.0.0.1:8000/comanda/", produto, function(msg){
        //alert("Produto Registrado!")

        document.getElementById('formPostProduto').reset()
    })

	// Limpa os Campos
	document.getElementById('produtos').reset();

	// Exibe os Produtos
	mostraProduto();
}

function removeProduto(operacao){
	var patio = JSON.parse(localStorage.getItem('produtos'))

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].operacao == operacao){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('produtos', JSON.stringify(patio));

	mostraProduto();
}

function mostraProduto(){

	$.get("http://127.0.0.1:8000/comanda/", function(retorno){

		var nQuarto =  $("#numquarto").text()
		var prateleira = document.getElementById('lprodutos');
		prateleira.innerHTML = '';

		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		for(var i = 0; i < dados.length; i++){

			var id = dados[i].id
			var quarto =  dados[i].quarto
			var descricao = dados[i].descricao
			var quantidade = dados[i].quantidade
			var valorUnitario = dados[i].valor_unitario
			var valorTotal = dados[i].valor_total
	
			prateleira.innerHTML += '<tr>'+
										'<td>'+ quarto + '</td>' +
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										 '<td><button onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		}
	})
}
