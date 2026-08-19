function exibirBoasVindas(){
    let boasVindas = document.getElementById("respostaContato")
    let nomeUser = document.getElementById("nomeEntrou").value

    boasVindas.textContent = ("Seja muito bem vindo " + nomeUser + "!")
}

function modoPromocao(){
    let promoMouse = document.getElementById("cardMouse");

    let descontoMouse = document.getElementById("descontoMouse");
    let precoMouse = document.getElementById("precoMouse");

    promoMouse.style.boxShadow = "0 4px 30px rgba(255, 251, 0, 0.3)";
    promoMouse.style.border = "1px solid rgb(255, 217, 0)";
    descontoMouse.style.boxShadow = "0 4px 30px rgba(255, 0, 0, 0.3)";

    descontoMouse.textContent = "10% OFF";
    precoMouse.textContent = "R$ 108,00";


    let promoControle = document.getElementById("cardControle");

    let descontoControle = document.getElementById("descontoControle");
    let precoControle = document.getElementById("precoControle");

    promoControle.style.boxShadow = "0 4px 30px rgba(255, 251, 0, 0.3)";
    promoControle.style.border = "1px solid rgb(255, 217, 0)";
    descontoControle.style.boxShadow = "0 4px 30px rgba(255, 0, 0, 0.3)";

    descontoControle.textContent = "35% OFF";
    precoControle.textContent = "R$ 199,99";
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

    if (valorTotal >= 500) {
        resultadoC.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}${textoDesconto} - Frete grátis disponível.`;
        
        resultadoC.style.color = "#28a745"; 
        resultadoC.style.fontWeight = "bold";
        resultadoC.style.backgroundColor = "#e8f5e9"; 
        resultadoC.style.padding = "10px";
        resultadoC.style.borderRadius = "5px";

    } else {
        
        resultadoC.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}${textoDesconto} - Frete calculado separadamente.`;
        
     
        resultadoC.style.color = "#d35400"; 
        resultadoC.style.fontWeight = "normal";
        resultadoC.style.backgroundColor = "#fff3cd";
        resultadoC.style.padding = "10px";
        resultadoC.style.borderRadius = "5px";
    }
}


function enviarContato(){
    let nome = document.getElementById("nomeAtn").value
    let resultadoAtn = document.getElementById("resultadoAtn")

    if (nome === "") {
        resultadoAtn.textContent = "Digite seu nome antes de continuar.";
        resultadoAtn.style.color = "red"; 
        resultadoAtn.style.border = "0.5px solid red";
        resultadoAtn.style.background = "rgba(237, 0, 0, 0.21)"

    } 
    else {
        resultadoAtn.textContent = "Obrigado, " + nome + "! Sua mensagem foi registrada.";
        resultadoAtn.style.color = "green"; 
        resultadoAtn.style.border = "0.5px solid green";
        resultadoAtn.style.background = "rgba(0, 237, 32, 0.21)"

    }


    let idade = document.getElementById("idade").value

    if (idade >= 18){
        resultadoAtnIdade.textContent = "Você pode participar das promoções para maiores de 18 anos."
    }
    else{
        resultadoAtnIdade.textContent = "As promoções gerais continuam disponíveis para você."
    }
}

function destacarAtendimento(){
    
}
