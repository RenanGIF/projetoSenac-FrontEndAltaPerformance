let convidados = [];

function adicionar(){
    let convidado = document.getElementById("festa").value;
    let local = document.getElementById("local");
    convidados.push(convidado);
    local.textContent = convidados;
}

function mostrar(){
    let posicao = document.getElementById("pos").value;
    alert(convidados[posicao - 1]);
}

function encontrar(){
    let nome = document.getElementById("find").value;
    let resultado = convidados.includes(nome);
    
    if (resultado === true) {
        alert("O usuario esta na festa!");
        alert((convidados.indexOf(nome) + 1) + " é a posição dele.");
    } else {
        alert("O usuario nao esta na festa.");
    }
}

function remover(){
    let posicao = document.getElementById("remove").value;
    convidados.splice(posicao - 1, 1);
    let local = document.getElementById("local");
    local.textContent = convidados;
}