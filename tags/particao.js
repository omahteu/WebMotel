export var codigosIDs = []

export function index(){

    // Data e Hora
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var datahora = String(hora) + ':' + String(minutos)

    // Valor do Quarto
    var valor = $("#valor-quarto").text()

    // Quarto
    var quarto = $("#numquarto").text()

    // Agrupando Dados
    var dado = {
        datahora: datahora,
        valor: valor,
        quarto: quarto
    }

    // ID
    var codigoID = gera_id()
    codigosIDs.push(codigoID)

    
    if(localStorage.getItem('quarto' + quarto) === null){
        localStorage.setItem('quarto' + quarto, codigoID);
        
    } else (
        console.log('já exite')
    )

    // Salvar em LocalStorage
    if(localStorage.getItem(codigoID) === null){
		var dados = [];
		dados.push(dado);
		localStorage.setItem(codigoID, JSON.stringify(dados));
	} else {
		var dados = JSON.parse(localStorage.getItem(codigoID));
		dados.push(dado);
		localStorage.setItem(codigoID, JSON.stringify(dados));
	}
}

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}
