document.addEventListener("DOMContentLoaded", function () {
  const baseImagens = {
    todas: ["imagem.png", "cidade.jpg", "animais.jpg", "natureza.jpeg"],
    natureza: ["natureza.jpeg"],
    cidade: ["cidade.jpg"],
    animais: ["animais.jpg"],
  };

  function carregaImagens() {
    // Selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");

    const imagens= baseImagens["todas"];
    
    imagens.forEach(img =>{ 
console.log(img);
    galeria.innerHTML += '<div> <img src="imagens/' + img +' " /> </div>'

     });

  };

  carregaImagens();

  //Função de CLICK
  document.body.addEventListener("click", function (event) {
    // Acessa a lista de classe de onde clicou e
    // procura pela classe botao-categoria
    if (event.target.classList.contains("botao-categoria")) {
      alert(123);
    }
  });
});
