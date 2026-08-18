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

function simularCompra(){
    let opcoesP = document.getElementById("produtos")
    let resultadoValu
    let resultadoC = document.getElementById("resultCompra")
    let opcoesU = Number(document.getElementById("unidades").value)

    if (opcoesU >= 3 && resultadoValu >= 500){
        let resultadoValu = opcoesU * opcoesP.value - (opcoesP.value * 0.1)
        resultadoC.textContent = ("O seu produto vai custar: R$ " + resultadoValu + " foi aplicado um desconto de 10%, por estar acima de 3 unidades, e voce tera FRETE GRATIS por sua compra estar acima de R$ 500.00")
    }

    else if (opcoesU >= 3 && resultadoValu < 500){
        let resultadoValu = opcoesU * opcoesP.value - (opcoesP.value * 0.1)
        resultadoC.textContent = ("O seu produto vai custar: R$ " + resultadoValu + " foi aplicado um desconto de 10%, por estar acima de 3 unidades, e voce nao tera FRETE GRATIS por sua compra nao estar acima de R$ 500.00")
    }
    
    else if (opcoesU < 3 && resultadoValu >= 500){
        let resultadoValu = opcoesU * opcoesP.value 
        resultadoC.textContent = ("O seu produto vai custar: R$ " + resultadoValu + " nao foi aplicado um desconto de 10%, por estar acima de 3 unidades, e voce tera FRETE GRATIS por sua compra estar acima de R$ 500.00")
    }
    
    else if (opcoesU < 3 && resultadoValu < 500){
        let resultadoValu = opcoesU * opcoesP.value 
        resultadoC.textContent = ("O seu produto vai custar: R$ " + resultadoValu + " nao foi aplicado um desconto de 10%, por estar acima de 3 unidades, e voce tera FRETE GRATIS por sua compra nao estar acima de R$ 500.00")
    }
   
    }
