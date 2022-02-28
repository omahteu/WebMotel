var users = [
    {nome: "Tony", senha: "123"},
]

$("#entrar").click(function(){
    
    var nome = $("#nome")
    var senha = $("#senha")

    if(nome.val() == ''){
        alert('Nome Inválido')
        nome.focus()
        return
    }

    if(senha.val() == ''){
        alert('Senha Inválida')
        senha.focus()
        return
    }

    var b = false

    for(let i = 0; i<users.length; i++) {                           
        if (nome.val() == users[i].nome && senha.val() == users[i].senha) {
            alert("Login com Sucesso!")
            localStorage.setItem('usuarioLogado', '1');
            $(location).attr('href', './paginas/home.html');
            b = true                       
        }
    } 
    
    if(b == false) {                      
        alert('Dados incorretos!');                     
    }
    
})
