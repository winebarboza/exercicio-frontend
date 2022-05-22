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