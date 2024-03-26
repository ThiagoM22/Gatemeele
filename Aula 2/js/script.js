alerta = () => {
  alert(`Olá eu sou um alerta`);
};
const enviar = () => {
  let nome = document.getElementById("Nome").value;
  document.getElementById("resposta").innerHTML = `<h2>Olá ${nome} formulário enviado com sucesso</h2>`
  if(nome ==""){
    alert(`Olá bem vindo`)
  }
  else{
  alert(`Olá ${nome}, seja bem vindo ao meu sistema!`);
}};
