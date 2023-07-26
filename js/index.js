function deposito(){
    var quantidade = document.querySelector(".quantia").value;
    var saldo = window.document.getElementsByTagName("h3")[1];
    var saldo = saldo.innerText;
    var novosaldo = parseFloat(saldo) + parseFloat(quantidade);
       
    if (quantidade >= 1) { document.querySelector(".saldo").innerHTML = novosaldo;}

    (quantidade >= 1)? document.querySelector(".resposta").innerHTML = "depósito realizado com sucesso!!"
    :document.querySelector(".resposta").innerHTML = "você precisa digitar um valor maior que zero(0) para realizar um depósito.";
}
            // funçao sacar

function sacar(quantia,saldo){
    var quantidade = document.querySelector(".quantia").value;
    var saldo = window.document.getElementsByTagName("h3")[1];
    var saldo = saldo.innerText;
    var novosaldo = parseFloat(saldo) - parseFloat(quantidade);
    
    if (quantidade >= 1){
        if (novosaldo >= 0){

            if(quantidade >= 1){ document.querySelector(".saldo").innerHTML = novosaldo;}

                return (quantidade >= 1)? document.querySelector(".resposta").innerHTML = "saque realizado com sucesso!!"
                        :document.querySelector(".resposta").innerHTML = "você precisa digitar um valor maior que zero(0) para realizar um saque.";
    
        }else {document.querySelector(".resposta").innerHTML = "você não pode sacar essa quantia, pois o valor do saque é maior do que o saldo na conta.";}
    }else{document.querySelector(".resposta").innerHTML = "você precisa digitar um valor maior que zero(0) para realizar um saque.";}
}
            // funçao rendimento

var mostrar_rendimento = (cdi,saldo) => {
    var saldo = window.document.getElementsByTagName("h3")[1];
    var saldo = saldo.innerText;
    var cdi = 1.14;
    var rendimento = parseFloat(saldo) * parseFloat(cdi/100);
    
    return document.querySelector(".resposta").innerHTML= "seu dinheiro está rendendo " + rendimento + " ao mês.";
}
