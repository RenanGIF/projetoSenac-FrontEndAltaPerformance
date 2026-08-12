

function boasVindas() {
    alert("Você está a um passo de encontrar seu próximo carro. Faça sua simulação.")
}

function maisInformacoes() {
    let descricaoTecnica = document.getElementById("dsOnix2026")

    descricaoTecnica.textContent =
        "Detalhes técnicos: motor 1.5 Turbo de 173 cv, câmbio automático CVT, " +
        "58.400 km rodados, consumo médio de 11,8 km/l na cidade e 14,4 km/l na estrada. " +
        "O veículo inclui teto solar, bancos em couro, câmera de ré, central multimídia, " +
        "seis airbags e garantia de 90 dias para motor e câmbio.";

}

function respostaInterrese() {
    let nomeCar = document.getElementById("nome").value
    let telefone = document.getElementById("telefoneUser").value
    let carInteresse = document.getElementById("carroInteresse").value

    alert("Ola " + nomeCar + ", em breve entraremos em contato para conversarmos sobre o carro " + carInteresse + ", pelo numero de telefone: " + telefone + ". Ate mais!");
}

function resultFinanciamento() {
    let valorCarro = Number(document.getElementById("valorCarro").value)
    let entrada = Number(document.getElementById("entrada").value)
    let parcelas = Number(document.getElementById("parcelas").value)

    let resposta = document.getElementById("respostaContato")

    if (entrada >= 0.2 * valorCarro){
        resposta.textContent = "Você se qualifica para condições especiais. Seu financiamento: Entrada de " + entrada + " reais, " + parcelas + " parcelas de " + (valorCarro - entrada - 1000) / parcelas + " reais.";
    }
    else if (entrada < 0.2 * valorCarro){
        resposta.textContent = "Você não se qualifica para condições especiais, aumente a entrada. Seu financiamento: Entrada de " + entrada + " reais, " + parcelas + " parcelas de " + (valorCarro - entrada) / parcelas + " reais.";
    }
    else {
        alert("Valor invalido, digite um numero")
    }
}

function trocaDeModo() {

  // Obtendo o elemento do corpo da página

  var algo = document.body;

  // Definindo o novo background

  algo.style.background = "lightblue"; // Você pode usar qualquer cor válida aqui, como "blue", "#FF0000", "rgba(0, 255, 0, 0.5)", etc.

}