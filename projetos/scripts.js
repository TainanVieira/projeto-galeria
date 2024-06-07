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
    galeria.innerHTML += '<div class= "imagem_item" > <img src="imagens/' + img +' " alt="' + img + '" /> </div>';

     });

  };
function ordenaImagens(ordem){
  console.log(ordem);
  const imagens = Array.from(document.querySelectorAll('#galeria-imagens .imagem_item'));
 
 
  imagens.sort((a, b)=> {
    const nameA= a.querySelector ('img').getAttribute('alt');
    const nameB= b.querySelector ('img').getAttribute('alt');

    // Operador ternário - se for true? senão :
    return ordem == 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    
    
  })
  const galeria = document.getElementById('galeria-imagens');
  galeria.innerHTML = '';// Esvazia bos das imagens 
  imagens.forEach(imagem => { 
    galeria.appendChild(imagem)//Adiciona as imagens novamente, agora ordenar
  })
}
  
  //Função de CLICK
  document.body.addEventListener("click", function (event) {
    // Acessa a lista de classe de onde clicou e
    // procura pela classe botao-categoria
    if (event.target.classList.contains("botao-categoria")) {
      
      const categoria = event.target.dataset.categoria;

      
      //alert(categoria);
      carregaImagens(categoria);

    }

    if(event.target.classList.contains("botao-ordenar")){
     
      const ordem = event.target.dataset.ordem;
      
      ordenaImagens(ordem);
      console.log(ordem);
      
    }
  
  
  });

  carregaImagens("todas"); 

});
