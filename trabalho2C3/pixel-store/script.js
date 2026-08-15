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
