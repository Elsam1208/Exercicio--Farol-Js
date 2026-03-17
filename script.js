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

    / ==============================
// 🚦 PARTE AUTOMÁTICA
// ==============================

let cores = ["verde", "amarelo", "vermelho"];
let index = 0;
let intervalo;

// troca automática
function modoAutomatico(){
    mudarCor(cores[index]);
    index = (index + 1) % cores.length;
}

// reinicia o tempo quando clicar
function reiniciar(){
    clearInterval(intervalo);
    intervalo = setInterval(modoAutomatico, 3000);
}

// inicia automático ao abrir
modoAutomatico();
intervalo = setInterval(modoAutomatico, 3000);

// opcional: faz os botões reiniciarem o tempo
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", reiniciar);
}); 
    }
