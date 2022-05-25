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

    if(resposta.style.display==="" || resposta.style.display==='none'){
        resposta.style.display="block";
    }
    else{
        resposta.style.display="none";
    }
}
// criar comentários
function criarTopico(){
    let comentario = document.getElementById("input-user");
    let areaDeTopicos = document.getElementById('area-topics')

    if(areaDeTopicos.style.display ===''){
        comentario.style.display='block'
        areaDeTopicos.style.display='none'
    }
    else{
      areaDeTopicos.style.display='block'
      comentario.style.display='comentario'
    }
}
// enviar comentário
function confirmacaoEnvio(){
}