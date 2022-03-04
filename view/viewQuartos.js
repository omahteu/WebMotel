import { modos } from '../boxes/box.js'

function mostraProduto(){

	$.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

		var nQuarto =  $("#numquarto").text()
		var prateleira = document.getElementById('lprodutos');
		prateleira.innerHTML = '';

		try{
			var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

			dados.forEach(function(resultado){

				var id = resultado.id
				var quarto =  resultado.quarto
				var descricao = resultado.descricao
				var quantidade = resultado.quantidade
				var valorUnitario = resultado.valor_unitario
				var valorTotal = resultado.valor_total

				prateleira.innerHTML += '<tr>'+
											'<td>'+ quarto + '</td>' +
											'<td>'+ descricao + '</td>' +
											'<td>'+ quantidade + '</td>' +
											'<td>'+ valorUnitario + '</td>' +
											'<td>'+ valorTotal + '</td>' +
											'<td><button onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
										'</tr>';
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}

$("[id=mon]").mousedown(function(){
	
	var instance = $(this)[0].childNodes[1].id.slice(6).toLowerCase()
	
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

	var identificador = instance.substr(-1)

	$("#numquarto").text(identificador)
	
	switch (identificador) {
		case '1':
			$("#intervalo").text(modos.slice(0, 3))
			backupInfos(instance)
			break;
		
		case '2':
			$("#intervalo").text(modos.slice(3, 6))
			backupInfos(instance)
			break

		case '3':
			$("#intervalo").text(modos.slice(6, 9))
			backupInfos(instance)
			break
		
		case '4':
			$("#intervalo").text(modos.slice(9, 12))
			backupInfos(instance)
			break
	}

	// Variáveis usadas para Filtro
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	// Filtro para Restauração de Produtos e Veículos
	if(tipos.includes(tipo)){
		mostraProduto()
	}
});

function backupInfos(instancia){

	$.get("https://defmoteapi.herokuapp.com/header/", function(retorno){

		var nQuarto =  $("#numquarto").text()

		try{
			var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

			dados.forEach(function(resultado){

				$("#numquarto").text(resultado.quanrto)
				$("#entrada").text(resultado.datahora)
				$("#valor-quarto").text(resultado.valor)
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}
