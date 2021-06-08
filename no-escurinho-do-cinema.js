function solucao(obj) {
    if (obj.temIngresso == true && obj.idade >= obj.censura){ 
      acesso = true;
    }
    else if (obj.temIngresso == true && obj.estaComPais === true){
      acesso = true;
    }
    else {
      acesso = false;
    }
    
    if (acesso === false){
      console.log ("ACESSO NEGADO");
    }
    
    if (acesso === true){
       if (obj.idade < 18 || obj.temCarteirinha === true){
         console.log ("MEIA");
       } 
       else {
         console.log ("INTEIRA");
       }
    
      }
    
    }