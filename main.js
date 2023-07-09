// function buybutton () {
//     const eventoBotao = document.getElementById("buy1");

//     eventoBotao.addEventListener("click", function() {
//         alert(`Botão Clicado`);
//     });

// }

var meuBotao = document.getElementById("buy1");

meuBotao.addEventListener("click", function() {
  minhaFuncao();
});

function minhaFuncao() {
  // Adicione aqui o código da função que deseja executar quando o botão for clicado
  alert("Botão clicado!");
}