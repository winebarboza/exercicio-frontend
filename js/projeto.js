//botão ler mais
function leiaMais(){
    let pontos = document.getElementById("bullets");
    let maisTexto = document.getElementById("more-text");
    let botao = document.getElementById("show-more")   

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        botao.innerHTML="Leia mais";

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
    }
} 
//visualizando respostas de comentários
function visualizarRespostas(){
    let resposta = document.getElementById("answers");
    
    if(resposta.style.display==="none"){
        resposta.style.display="block";
    }
    else{
        resposta.style.display="none";
    }
}
// criar comentários
function criarTopico(){
    let comentario = document.getElementById("input-user");
    let criarComentario = document.getElementById("create-comment");
    let botao = document.getElementById("create-topics");

    if(comentario.style.display==="none"){
        criarComentario.style.display="none";
        comentario.style.display="block";
        botao.style.display="none";
    }
    else{
        comentario.style.display="none";
    }
    
}
// enviar comentário
function confirmacaoEnvio(){
}