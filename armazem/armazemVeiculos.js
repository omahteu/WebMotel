$("#guardara").click(function(){
    var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registroVeiculo()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})

function registroVeiculo(){

	var quarto =  $("#numquarto").text()
	var veiculo = $("#tipoVeiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()

	var patio = {
		quarto: quarto,
		veiculo: veiculo,
		modelo: modelo,
		placa: placa
    }

	// Requisição POST
	$.post("http://127.0.0.1:8000/comanda/", patio, function(msg){

		// Exibe os Produtos
		mostraProduto();
	})

	document.getElementById('formLogin').reset();
}

function removeVeiculo(operacao){

	$.ajax({
		url: "http://127.0.0.1:8000/patio/" + operacao,
		method: "DELETE",
		dataType: "json",
		success: function(data){
			alert('Produto Excluído!')
			mostraProduto();
		}
	})
}

function mostraVeiculo(){

	// Requisição GET
	$.get("http://127.0.0.1:8000/patio/", function(retorno){

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#numquarto").text()
		var prateleira = document.getElementById('lprodutos');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		for(var i = 0; i < dados.length; i++){

			var id = dados[i].id
			var quarto =  dados[i].quarto
			var veiculo = dados[i].veiculo
			var modelo = dados[i].modelo
			var placa = dados[i].placa
	
			prateleira.innerHTML += '<tr>'+
										'<td>'+ quarto + '</td>' +
										'<td>'+ veiculo + '</td>' +
										'<td>'+ modelo + '</td>' +
										'<td>'+ placa + '</td>' +
										 '<td><button onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		}
	})
}
