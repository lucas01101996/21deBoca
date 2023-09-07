//botoes
var btnLance1 = document.getElementById("btnLance1");
var btnLance2 = document.getElementById("btnLance2");
var btnLance3 = document.getElementById("btnLance3"); 

var pontuacao = document.getElementById("pontuacao");

var textLance = document.createTextNode("0"); // aumentar o numero e criar funçoes para quando clicar provavelem usa if e for

 
// var soma = 0;
// // tenho que fazer um botao que quando clicar irá mudar seu valor para 1,2 ou 3 a mais do que o valor atual

 pontuacao.Value = 0;
 textLance = 0;

 
 function somaFuncao(pontuacao, soma) {
    while (pontuacao<=21) {
      pontuacao = pontuacao+soma
    }
    return pontuacao;
}

      
    btnLance1.onclick = function (){ 
     pontuacao.innerHTML = somaFuncao(pontuacao.Value,1);
     console.log(pontuacao.innerHTML)  
     console.log(pontuacao) 
    }

    btnLance2.onclick = function (){
        pontuacao.innerHTML = somaFuncao(pontuacao.Value,2);
        console.log(pontuacao.Value) 
      }

    btnLance3.onclick = function (){
        pontuacao.innerHTML = somaFuncao(pontuacao.Value,3);
        console.log(pontuacao.Value)
      }
 
  
console.log(pontuacao.Value)
//pontuacao.appendChild(textLance);


// fazer de forma sorteada a vez do computador o professor deu a função