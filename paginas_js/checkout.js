

// Consegui somar valores

$(document).ready(function(){
	informacaoes()
})

function informacaoes(){

	var numero_quarto = JSON.parse(sessionStorage.getItem('Encerrando'))
    
    var dados_particao = JSON.parse(localStorage.getItem('quarto' + numero_quarto))
    var dados_quarto = JSON.parse(localStorage.getItem(dados_particao))

    var dds = JSON.parse(localStorage.getItem('produtos'))
    var prateleira = document.getElementById('itensComprados');
	prateleira.innerHTML = '';

	try {
		var dados = dds.filter(quartos => quartos.quarto == dados_quarto[0].quarto)

		for(var i = 0; i < dados.length; i++){

			var descricao =  dados[i].descricao
			var quantidade =  dados[i].quantidade
			var valor_total = dados[i].valor_total
			var valor_unitario = dados[i].valor_unitario

	
			prateleira.innerHTML += '<tr>'+
										'<td>'+
											'<div class="product-cart d-flex">'+
												'<div class="product-content media-body">'+
													'<h5 class="title">' + descricao + '</h5>'+
													'<span>Unidade Custa R$ ' + valor_unitario + '</span>'+
												'</div>'+
											'</div>'+
										'</td>'+
										'<td>'+
											'<p>' + quantidade + '</p>'+
										'</td>'+
										'<td>'+
											'<p class="price" id="total">' + valor_total + '</p>'+
										'</td>'+
									'</tr>';
		}
	} catch (error) {
		localStorage.setItem('produtos', JSON.stringify([]))
	}

	

	var totais = $("[id=total]").text()

	var arraytotal = totais.split('R$')

	var arraySemVazios = arraytotal.filter(function (i) {
		return i;
	});
	

	var sum = 0

	for(var a = 0; a < arraySemVazios.length; a++){
		sum += parseFloat(arraySemVazios[a])
	}

	$("#valorQuarto").text(dados_quarto[0].valor)
	$("#valorItens").text(sum)

	var ttgeral = Number(dados_quarto[0].valor) + Number(sum)

	$("#totalGeral").text(ttgeral)
}