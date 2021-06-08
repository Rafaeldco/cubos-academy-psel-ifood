function solucao(ano) {
	if ((ano - 2014) % 4 == 0){
  console.log("COPA");
} 
else if ((ano - 2016) % 4 == 0){
  console.log ("JOGOS");
}
else {
  console.log("MEH");
}
}