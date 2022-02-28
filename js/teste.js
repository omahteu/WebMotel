$(document).ready(function(){
    var divPai = $('.Linha');
    var btnCriar = $('#criarLinha');
     
    btnCriar.click(function(){
        divPai.append("<div class='textoBox' >div texto</div>");
        divPai.append("<div class='mostraBox' >div mostra</div>");
        divPai.append("<div class='mudarBox' >div mudar</div>");
        divPai.append("<div class='excluirBox' >div excluir</div>");
    });
     
    });