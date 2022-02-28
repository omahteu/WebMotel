function mostraProduto(){

	var nQuarto =  $("#numquarto").text()
	var dados_produtos = JSON.parse(localStorage.getItem('produtos'))
	var prateleira = document.getElementById('lprodutos');
	prateleira.innerHTML = '';

	try {
		var dados = dados_produtos.filter(quartos => quartos.quarto == nQuarto)

		for(var i = 0; i < dados.length; i++){

			var operacao =  dados[i].operacao
			var quarto =  dados[i].quarto
			var codigo = dados[i].codigo
			var descricao = dados[i].descricao
			var quantidade = dados[i].quantidade
			var valorUnitario = dados[i].valor_unitario
			var valorTotal = dados[i].valor_total
	
			prateleira.innerHTML += '<tr><td hidden>'+ operacao + '</td>'+
										 '<td>'+ quarto + '</td>' +
										'<td>'+ codigo + '</td>' +
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										 '<td><button onclick="removeProduto('+ operacao +')" class="btn btn-danger">Remover</button></td>'+
									 '</tr>';
		}
	} catch (error) {
		localStorage.setItem('produtos', JSON.stringify([]))
	}
	
}

$("#mon").mousedown(function(){

	var instance = $(this)[0].childNodes[1].id.slice(6).toLowerCase()
	console.log($(this))

	// Recuperação da Cor das Tags
	var cor = $("#" + instance).css("background-color")
	
	// Filtro para Restaurar as Tags Corretas
	switch(cor){
		case 'rgb(30, 144, 255)':
			$("#tipo").text('reservado')
			break
		case 'rgb(240, 230, 140)':
			$("#tipo").text('limpeza')
			break
		case 'rgb(218, 165, 32)':
			$("#tipo").text('aguardando')
			break
		case 'rgb(169, 169, 169)':
			$("#tipo").text('manutencao')
			break
		case 'rgb(139, 0, 139)':
			$("#tipo").text('pernoite')
			break
		case 'rgb(255, 0, 0)':
			$("#tipo").text('locado')
			break
		case 'rgb(255, 228, 196)':
			$("#tipo").text('faxina')
			break
		case 'rgb(245, 245, 245)':
			$("#tipo").text('0')
			break
	}

	// Exibição de Dados do Cabeçalho
	$("#intervalo").text('a1,a2,a3')
	backupInfos(instance)

	// Variáveis usadas para Filtro
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	// Filtro para Restauração de Produtos e Veículos
	if(tipos.includes(tipo)){
		mostraProduto()
		// mostraGaragem(quarto)
	}
});

function backupInfos(instancia){

	// Recuperação da Chave e do LocalStorage
	// var IDCodigo = $(codigosIDs).get(-1);
	var dados_particao = JSON.parse(localStorage.getItem(instancia))
	// console.log(dados_particao)

	var dados_quarto = JSON.parse(localStorage.getItem(dados_particao))

	// Exibição dos Dados Recuperados
	try {
		$("#numquarto").text(dados_quarto[0].quarto)
		$("#entrada").text(dados_quarto[0].datahora)
		$("#valor-quarto").text(dados_quarto[0].valor)
	} catch (error) {
		$("#numquarto").text('')
		$("#entrada").text('')
		$("#valor-quarto").text('')
	}
}
