function mudarCor(cor){

    let vermelho = document.getElementById("vermelho");
    let amarelo = document.getElementById("amarelo");
    let verde = document.getElementById("verde");
    let mensagem = document.getElementById("mensagem");
    
    vermelho.style.background = "gray";
    amarelo.style.background = "gray";
    verde.style.background = "gray";
    
    if(cor === "vermelho"){
    
    vermelho.style.background = "red";
    mensagem.innerHTML = "🛑 PARE";
    
    }
    
    else if(cor === "amarelo"){
    
    amarelo.style.background = "yellow";
    mensagem.innerHTML = "⚠️ ATENÇÃO";
    
    }
    
    else{
    
    verde.style.background = "green";
    mensagem.innerHTML = "👍 SIGA";
    
    }
    
    }