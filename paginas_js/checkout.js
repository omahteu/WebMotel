$(document).ready(function(){
	informacaoes()
})

function informacaoes(){

	var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

	$.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

	    var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';

		try {
			var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

			for(var i = 0; i < dados.length; i++){
	
				//var quarto = dados[i].quarto
				var descricao =  dados[i].descricao
				var quantidade =  dados[i].quantidade
				var valor_total = dados[i].valor_total
				var valor_unitario = dados[i].valor_unitario
				//var datahora = dados[i].datahora
				var valor_quarto = dados[i].valor_quarto


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

		$("#valorItens").text(sum)
		$("#valorQuarto").text(valor_quarto)
		
		var ttgeral = Number(valor_quarto) + Number(sum)

		$("#totalGeral").text(ttgeral)

		$("#desconto").click(function(){
			
			var codigoDeconto = $("#codigoDesconto").val()
			$("#totalGeral").text(ttgeral = ttgeral - codigoDeconto)
			$("#codigoDesconto").val('')
			var descont = document.getElementById('codigoDesconto')
			descont.disabled = true
			$("#valorDesconto").text(codigoDeconto)
			
		})
	})
}
