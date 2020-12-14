
// exercicio 001
function verifica(){
    var nascimento = parseInt(document.getElementById("anoNasc").value);
    var ano = parseInt(document.getElementById("anoAtual").value); 

    var idade = (ano - nascimento);
    if(idade >18){
        document.getElementById("resultado").innerHTML = 
        "Você tem "+idade+" anos<br> E já atingiu a maior idade.";
    }else{
        document.getElementById("resultado").innerHTML = 
        "Você tem "+idade+" anos<br> E ainda não atingiu a maior idade.";
    }   
}

// exercicio 002
function verificaNum(){
    var numero = Number(document.getElementById("numero").value);
    if(numero == 0){
        document.getElementById("resultado002").innerHTML = 
        ` O número digitado tem que ser diferente de 0.`;
    }else if(numero % 2 == 0){
        document.getElementById("resultado002").innerHTML = 
        ` O número ${numero} é par`;
    }else{
        document.getElementById("resultado002").innerHTML = 
        ` O número ${numero} é impar`; 
    }
}

//exercicio 003
function calcularImc(){
    var massa = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = massa /(Math.pow(altura,2));
    if(imc < 18.5){
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"Peso abaixo do ideal.";
    }else if(imc <= 24.9){
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"Peso normal.";
    }else if(imc <= 29.9){
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"SobrePeso.";
    }else if(imc <= 34.9){
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"Obesidade (Grau I).";
    }else if(imc <= 39.9){
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"Obesidade severa (Grau II).";
    }else{
        document.getElementById("resultado003").innerHTML =
        "IMC: "+imc.toFixed(1)+"<br>"
        +"Obesidade mórbida (Grau III).";
    }
}
//exercicio 004
function calcularTri(){
    var l1 = Number(document.getElementById("l1").value);
    var l2 = Number(document.getElementById("l2").value);
    var l3 = Number(document.getElementById("l3").value);

    /**
     * 1º verifica se pode ser um triangulo, com base na formula
     *  a soma de 2 lados deve ser maior, que o tamanho do lado oposto.
     */
    if((l1 + l2 > l3) && (l2 + l3 > l1) && (l3 + l1 > l2)){
        if((l1 == l2) && (l2 == l3)){
            document.getElementById("resultado004").innerHTML =
            "Triângulo: <br> Equilátero";

        }else if((l1 != l2) && (l1 != l3) && (l2 != l1) && (l2 != l3)){
            document.getElementById("resultado004").innerHTML =
            "Triângulo: <br> Escaleno."
        }else{
            document.getElementById("resultado004").innerHTML =
            "Triângulo: <br> Isósceles."
        }        
    }else{
      document.getElementById("resultado004").innerHTML = 
      "Não pode formar um Triângulo.";
    }
}

//exercicio 005
function escolha(){
    var opcao = parseInt(document.getElementById("opcao").value);
    switch (opcao) {
        case 1:
            document.getElementById("resultado005").innerHTML = "Sua região: Sul";
            break;
        case 2:
            document.getElementById("resultado005").innerHTML = "Sua região: Sudeste";
            break;
        case 3:
            document.getElementById("resultado005").innerHTML = "Sua região: Centro-Oeste";
            break;
        case 4:
            document.getElementById("resultado005").innerHTML = "Sua região: Norte";
            break;
        case 5:
            document.getElementById("resultado005").innerHTML = "Sua região: Nordeste";
            break;
        
        default:
            document.getElementById("resultado005").innerHTML = "[ERRO]<br> Informe uma das regiões da lista.";
            break;
        }
}

//exercicio 006
function escolha006(){
    var op = document.getElementById("op").value;
     op.toUpperCase();
    switch ( op) {
        case "c":
            document.getElementById("resultado006").innerHTML = "Opção escolhida: Cadastrar"; 
            break; 
        case "r":
            document.getElementById("resultado006").innerHTML = "Opção escolhida: buscar"; 
            break;        
        case "u":
            document.getElementById("resultado006").innerHTML = "Opção escolhida: alterar"; 
            break;  
        case "d":
            document.getElementById("resultado006").innerHTML = "Opção escolhida: excluir"; 
            break;
        case "0":
            document.getElementById("resultado006").innerHTML = "Saindo...<br> Obrigado por Utilizar nosso sistema"; 
            break;
        default:
            document.getElementById("resultado005").innerHTML = "[ERRO]<br> Informe uma das regiões da lista.";
            break;         
        }
}

//exercicio 007
function escolha007(){
    var op1 = parseInt(document.getElementById("op1").value);
    var ingresso = 25.00;
    switch (op1) {
        case 1:
            var desconto = (ingresso - (ingresso * 50/100));  
            document.getElementById("resultado007").innerHTML = "Valor a pagar:R$ "+desconto.toFixed(2);
            break;
        case 2:
            var desconto = (ingresso - (ingresso * 30/100));  
            document.getElementById("resultado007").innerHTML = "Valor a pagar:R$ "+desconto.toFixed(2);
            break;
        case 3:
            var desconto = (ingresso - (ingresso * 50/100));  
            document.getElementById("resultado007").innerHTML = "Valor a pagar:R$ "+desconto.toFixed(2);
            break;
        case 4: 
            document.getElementById("resultado007").innerHTML = "Valor a pagar:R$ "+ingresso.toFixed(2);
            break;
        case 5: 
            document.getElementById("resultado007").innerHTML = "Obrigado por utilizar nosso sistema.<br> Volte sempre!";
            break;
       
        }
}