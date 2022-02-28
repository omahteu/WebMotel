$("#guardara").click(function(){
    var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registroVeiculo()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

function registroVeiculo(){

	var quarto =  $("#numquarto").text()
	var veiculo = $("#tipoVeiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()

	var patio = {
		operacao: gera_id(),
		quarto: quarto,
		veiculo: veiculo,
		modelo: modelo,
		placa: placa
    }

	if(localStorage.getItem('garagem') === null){
		var patios = [];
		patios.push(patio);
		localStorage.setItem('garagem', JSON.stringify(patios));
	} else {
		var patios = JSON.parse(localStorage.getItem('garagem'));
		patios.push(patio);
		localStorage.setItem('garagem', JSON.stringify(patios));
	}

	document.getElementById('formLogin').reset();

	mostraVeiculo();

}

function removeVeiculo(operacao){
	var patio = JSON.parse(localStorage.getItem('garagem'))

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].operacao == operacao){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('garagem', JSON.stringify(patio));

	mostraVeiculo();
}

function mostraVeiculo(){

	var nuQuarto =  $("#numquarto").text()
	var dados_garagem = JSON.parse(localStorage.getItem('garagem'))
	var patio = document.getElementById('garagem')
	patio.innerHTML = ''

	var dados = dados_garagem.filter(quartos => quartos.quarto == nuQuarto)

	for(var i = 0; i < dados.length; i++){

		var quarto =  dados[i].quarto
		var veiculo =  dados[i].veiculo
		var modelo = dados[i].modelo
		var placa = dados[i].placa
		var operacao = dados[i].operacao

		patio.innerHTML += '<tr><td>'+ quarto + '</td>'+
		 						'<td>'+ veiculo + '</td>' +
								'<td>'+ modelo + '</td>' +
								'<td>'+ placa + '</td>' +
								'<td hidden>'+ operacao + '</td>'+
		 						'<td><button onclick="removeVeiculo('+ operacao +')" class="btn btn-danger">Remover</button></td>'+
		 					'</tr>';
	}
}
