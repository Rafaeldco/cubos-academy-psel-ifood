function solucao(produtos) {

    const top = produtos.filter(function (produtos) {
      return produtos.preco >= 10000;
    });
    const sum = top
      .map(item => item.preco)
      .reduce((prev, curr) => prev + curr, 0);
    
    
    total = produtos.reduce((total, valor) => total + valor.preco, 0);
    percentual = sum / total;
    
    valores.totalTop = sum;
    valores.percentual = percentual;
    
    console.log(valores);
        
    }
    