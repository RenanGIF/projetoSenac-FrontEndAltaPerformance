function exibirBoasVindas(){
    let boasVindas = document.getElementById("respostaContato");
    let nomeUser = document.getElementById("nomeEntrou").value;

    if (nomeUser.trim() !== "") {
        boasVindas.textContent = "Seja muito bem-vindo, " + nomeUser + "!";
        boasVindas.style.color = "#f5b700";
        boasVindas.style.textAlign = "center";
        boasVindas.style.marginTop = "12px";
        boasVindas.style.fontWeight = "bold";
    }
}


function modoPromocao(){
    // Destaque Mouse
    let promoMouse = document.getElementById("cardMouse");
    let descontoMouse = document.getElementById("descontoMouse");
    let precoMouse = document.getElementById("precoMouse");

    if (promoMouse) {
        promoMouse.style.border = "1px solid #f5b700";
        promoMouse.style.boxShadow = "0 0 20px rgba(245, 183, 0, 0.35)";
        
        descontoMouse.textContent = "10% OFF";
        descontoMouse.style.backgroundColor = "#ff4d4d";
        precoMouse.textContent = "R$ 108,00";
    }

    // Destaque Controle
    let promoControle = document.getElementById("cardControle");
    let descontoControle = document.getElementById("descontoControle");
    let precoControle = document.getElementById("precoControle");

    if (promoControle) {
        promoControle.style.border = "1px solid #f5b700";
        promoControle.style.boxShadow = "0 0 20px rgba(245, 183, 0, 0.35)";

        descontoControle.textContent = "35% OFF";
        descontoControle.style.backgroundColor = "#ff4d4d";
        precoControle.textContent = "R$ 199,99";
    }
}


function simularCompra() {
    let opcoesP = document.getElementById("produtos");
    let opcoesU = document.getElementById("unidades");
    let resultadoC = document.getElementById("resultCompra");

    let precoProduto = Number(opcoesP.value);
    let quantidade = Number(opcoesU.value);

    let valorTotal = precoProduto * quantidade;
    let textoDesconto = "";

    if (quantidade >= 3) {
        valorTotal = valorTotal * 0.90;
        textoDesconto = " (Desconto de 10% aplicado por levar 3 ou mais)";
    } else {
        textoDesconto = " (Sem desconto)";
    }

    // Estilos de feedback no padrão dark
    resultadoC.style.padding = "14px";
    resultadoC.style.borderRadius = "8px";
    resultadoC.style.marginTop = "18px";
    resultadoC.style.fontSize = "15px";

    if (valorTotal >= 500) {
        resultadoC.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}${textoDesconto} - Frete grátis disponível.`;
        
        resultadoC.style.color = "#00ff73"; 
        resultadoC.style.fontWeight = "bold";
        resultadoC.style.backgroundColor = "rgba(0, 176, 79, 0.15)"; 
        resultadoC.style.border = "1px solid #00b04f";

    } else {
        resultadoC.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}${textoDesconto} - Frete calculado separadamente.`;
        
        resultadoC.style.color = "#f5b700"; 
        resultadoC.style.fontWeight = "bold";
        resultadoC.style.backgroundColor = "rgba(245, 183, 0, 0.12)";
        resultadoC.style.border = "1px solid #f5b700";
    }
}


function enviarContato(){
    let nome = document.getElementById("nomeAtn").value;
    let resultadoAtn = document.getElementById("resultadoAtn");
    let resultadoAtnIdade = document.getElementById("resultadoAtnIdade");
    let idade = document.getElementById("idade").value;

    resultadoAtn.style.padding = "12px";
    resultadoAtn.style.borderRadius = "6px";
    resultadoAtn.style.marginTop = "15px";

    if (nome === "") {
        resultadoAtn.textContent = "Digite seu nome antes de continuar.";
        resultadoAtn.style.color = "#ff4d4d"; 
        resultadoAtn.style.border = "1px solid #ff4d4d";
        resultadoAtn.style.background = "rgba(255, 77, 77, 0.15)";
    } 
    else {
        resultadoAtn.textContent = "Obrigado, " + nome + "! Sua mensagem foi registrada.";
        resultadoAtn.style.color = "#00ff73"; 
        resultadoAtn.style.border = "1px solid #00b04f";
        resultadoAtn.style.background = "rgba(0, 176, 79, 0.15)";
    }

    if (idade >= 18){
        resultadoAtnIdade.textContent = "Você pode participar das promoções para maiores de 18 anos.";
        resultadoAtnIdade.style.color = "#f5b700";
    }
    else {
        resultadoAtnIdade.textContent = "As promoções gerais continuam disponíveis para você.";
        resultadoAtnIdade.style.color = "#8c9099";
    }
}


function destacarAtendimento(){
    let fieldset = document.querySelector(".contato fieldset");

    if (fieldset) {
        fieldset.style.border = "1.5px solid #f5b700";
        fieldset.style.boxShadow = "0 0 25px rgba(245, 183, 0, 0.35)";
        fieldset.style.transition = "all 0.3s ease";
    }
}