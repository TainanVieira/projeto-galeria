document.addEventListener("DOMContentLoaded", function () {
  const baseImagens = {
    todas: ["imagem.png", "cidade.jpg", "animais.jpg", "natureza.jpeg"],
    natureza: ["natureza.jpeg"],
    cidade: ["cidade.jpg"],
    animais: ["animais.jpg"],
  };

  function carregaImagens(categoria) {
    // Selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");
    galeria.innerHTML='';//limpar bloco, apaga tudo dentro
    const imagens= baseImagens[categoria];
    
    imagens.forEach(img =>{ 
console.log(img);
    galeria.innerHTML += '<div> <img src="imagens/' + img +' " /> </div>'

     });

  };

  carregaImagens("todas"); 

  //Função de CLICK
  document.body.addEventListener("click", function (event) {
    // Acessa a lista de classe de onde clicou e
    // procura pela classe botao-categoria
    if (event.target.classList.contains("botao-categoria")) {
      
      const categoria = event.target.dataset.categoria;

      
      //alert(categoria);
      carregaImagens(categoria);
    }
  });
});
