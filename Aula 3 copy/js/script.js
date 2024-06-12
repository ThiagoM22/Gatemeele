trocar = () => {
  //    const html = document.documentElement;
  //    ja entende que é sobre o body
  //    document.querySelector("body").style.background = "url(https://th.bing.com/th/id/OIP.H88aKb7tUCF3XycKwqHjFgHaEK?rs=1&pid=ImgDetMain) no-repeat center"
  document.documentElement.classList.toggle("light");
  //   troca a classe do documento base para a classe light
  const isLihgt = document.documentElement.classList.contains("light");

  const imagem = isLihgt
    ? "./img/Thaigo Mazzi.jpg"
    : "./img/Thaigomazzi2.jpg";
  document.querySelector("#profile img").setAttribute("src", imagem);
  
  const trocalt = isLihgt ?"Homem de óculos redondo com camiseta cinza cabelo meio grande olhando para a camera." : "Homem de óculos redondo com camiseta cinza cabelo meio grande olhando para a camera, em uma pose diferente.."
  document.querySelector("#profile img").setAttribute("alt", trocalt);
};
// modificar as cores?imagens de fundo e botões
// deixar todos os links imagens
// mudar o ALT deferente em cada tema
