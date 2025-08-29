var produto1 = {
  nome: "Coca cola",
  categoria: "Bebidas",
  tamanhos: ["200ml", "Lata", "600ml", "2L"],
  quantidade: 7,
  descricao: function () {
    // O produto X é da categoria X
    console.log(
      "O produto",
      this.nome,
      "é da categoria",
      this.categoria,
      "e dos tamanhos"
    );
  },
  verTamanhos: opcoes,
};
var produto2 = {
  nome: "Salgado",
  categoria: "Comida",
  tamanhos: ["Pequeno", "Médio", "Grande"],
  quantidade: 25,
  descricao: function () {
    console.log("O produto", this.nome, "é da categoria", this.categoria);
  },
  verTamanhos: opcoes,
};

//Mostrar descrição com o uso do this internamente
// produto1.descricao();
// produto2.descricao();

function opcoes() {
  let tmh = "";
  //console.log("No inicio: ", tmh);
  for (index in this.tamanhos) {
    //tmh = tmh + this.tamanhos[index] + ", ";
    tmh += this.tamanhos[index] + ",";
    //console.log(tmh);
  }
  //console.log("No Fim: ", tmh);
  console.log("As opções de tamanho são:" , tmh)
}

// produto1.verTamanhos()
produto2.verTamanhos()
