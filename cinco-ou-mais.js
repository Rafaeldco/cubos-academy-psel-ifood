function solucao(precos) {
    
    precos.sort(function(a, b){return a-b})
    
    if (precos.length <= 4) {
      for (let x = 0; x < precos.length; x++){
      soma = soma + precos[x];
      }
    }
    else{
      for (let x = 0; x < precos.length; x++){
      soma = soma + precos[x];
     }
    }
    if (precos.length <= 4){
      console.log(soma);
    }
    else{
    console.log(soma - precos[0]);
    }
        
    }