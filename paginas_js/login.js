var users = [
    {nome: "Tony", senha: "123"},
]

$("#entrar").click(function(){

    autenticacao()
    
    // var nome = $("#nome")
    // var senha = $("#senha")

    // if(nome.val() == ''){
    //     alert('Nome Inválido')
    //     nome.focus()
    //     return
    // }

    // if(senha.val() == ''){
    //     alert('Senha Inválida')
    //     senha.focus()
    //     return
    // }

    // var b = false

    // for(let i = 0; i<users.length; i++) {                           
    //     if (nome.val() == users[i].nome && senha.val() == users[i].senha) {
    //         alert("Login com Sucesso!")
    //         localStorage.setItem('usuarioLogado', '1');
    //         $(location).attr('href', './paginas/home.html');
    //         b = true                       
    //     }
    // } 
    
    // if(b == false) {                      
    //     alert('Dados incorretos!');                     
    // }
    
})

async function autenticacao(){
    const resposta = await fetch("https://defmoteapi.herokuapp.com/usuarios/")
    const data = await resposta.json()

    var usuario = 'mis'

    var dados = data.filter(nome => nome.nome == usuario)

    console.log(typeof(dados.length))

    if(dados.length != 0){
        
        dados.forEach(elemento => {

            if(usuario == elemento.nome){
                //console.log('admin')
                console.log(elemento.id)
                
            } else {
                alert('Usuário e/ou Senha Inválidosxxxxxxxxxxxxx!')
            }
            
        });
    } else {
        alert("Usuário e/ou Senha Inválidos!")
    }
    
}