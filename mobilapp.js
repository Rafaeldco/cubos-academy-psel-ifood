function solucao(tempo, distancia) {

    if (tempo < 5){
    valor = 600;
    console.log (valor);
    }
    else if (tempo >= 5 && tempo <= 60){
      valor = tempo + distancia * 0.5;
      console.log (valor * 100);
    }
    else if (distancia < 100) {
      valor = distancia * 2;
      console.log (valor * 100);
    }
    else if (distancia >= 100){
      valor = distancia * 1.5;  
      console.log (valor * 100);
    }
    
    }