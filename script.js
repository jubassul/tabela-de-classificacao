var mel = {
  nome: "Mel",
  vitorias: 5,
  empates: 4,
  derrotas: 4,
  pontos: 0
};
var bruna = {
  nome: "Bruna",
  vitorias: 4,
  empates: 4,
  derrotas: 3,
  pontos: 0
};

//calculando os pontos:
//vitória: vale 3
//derrota: não vale nada
//empate: vale 1 ponto
function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  //Como colocar os pontos dentro da variavel de cada jogador:
  return pontos;
}
//exibindo os pontos dentro das variaveis de cada jogador:
bruna.pontos = calcularPontos(bruna);
console.log(bruna);
mel.pontos = calcularPontos(mel);
console.log(mel);

//exibindo os meus jogadores na tela:
//dentro desse var eu tenho as variaveis bruna e mel, pegando todas as suas
//propriedades que estão dentro de um objeto.

var jogadores = [bruna, mel];
function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")''>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")''>Derrota</button></td>";
    elemento += "<td><button onClick='zerar(" + i + ")''>Zerar</button></td>";
    elemento += "</tr>";
  }
  // para exibir o que fiz acima:
  vartabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadores(jogadores);

//adicionando novos jogadores
function adicionarJogador() {
  var novoJogador = document.getElementById("adicionarJogadores").value;
  var jogadoresNovos = {
    nome: novoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(jogadoresNovos);
  exibeJogadores(jogadores);
  document.getElementById("adicionarJogadores").value;
}

//fazendo os botões funcionarem
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  //jogador.vitorias++ é igual a jogador.vitorias = jogador.vitorias +1
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}

function zerar(i) {
  var jogador = jogadores[i];
  (jogador.vitorias = 0),
    (jogador.empates = 0),
    (jogador.derrotas = 0),
    (jogador.pontos = 0);
  exibeJogadores(jogadores);
}