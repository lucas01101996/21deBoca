var btnLance1 = document.getElementById("btnLance1");
var btnLance2 = document.getElementById("btnLance2");
var btnLance3 = document.getElementById("btnLance3"); 

var btnLance4 = document.getElementById("btnLance4");
var btnLance5 = document.getElementById("btnLance5");
var btnLance6 = document.getElementById("btnLance6"); 

var pontuacao = document.getElementById("pontuacao");

var textLance = document.createTextNode("0"); // aumentar o numero e criar funçoes para quando clicar provavelem usa if e for

 

// tenho que fazer um botao que quando clicar irá mudar seu valor para 1,2 ou 3 a mais do que o valor atual
// fazer varias funçoes clicar,  trocar de usuario etc
pontuacao.Value = 0;   
function acrescentar(){
    if(textLance=1){
        
    }
}
function clicar(){
    btnLance1.onclick = function(){ 
        pontuacao.innerHTML =(pontuacao.Value)+1;      
    }
}
btnLance2.onclick = function(){
    pontuacao.innerHTML = (pontuacao.Value)+2;
  }

btnLance3.onclick = function(){
    pontuacao.innerHTML = (pontuacao.Value)+3;
  }


  btnLance4.onclick = function(){ 
    pontuacao.innerHTML=(pontuacao.Value)+1;
}
btnLance5.onclick = function(){
    pontuacao.innerHTML = (pontuacao.Value)+2;
  }

btnLance6.onclick = function(){
    pontuacao.innerHTML = (pontuacao.Value)+3;
  }



  
pontuacao.appendChild(textLance);



//fazer o ranking 