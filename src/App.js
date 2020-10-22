import React, { useState } from "react";
import "./App.css";

const jogadorX = "X";
const jogadorO = "O";
const ESPACO_EM_BRANCO = "-";

function Casa({ x, y, jogadorAtual, onJogada }) {
  const [jogador, setJogador] = useState(null);

  const efetuarJogada = () => {
    if (jogador !== null) {
      return;
    }

    setJogador(jogadorAtual);
    onJogada({ x, y, jogador: jogadorAtual });
  };

  return (
    <span className="casa">
      <button onClick={efetuarJogada}>{jogador || ESPACO_EM_BRANCO}</button>
    </span>
  );
}

// DEVER DE CASA: Vc não precisa mexer
// em NADA fora dessa função.
//
// O seu dever de casa não é de react,
// é de logica de programação

function verificarLinhasEColunas(jogadas) {
  for (let direcao of ["x", "y"]) {
    for (let jogador of [jogadorX, jogadorO]) {
      for (let i = 0; i < 3; i++) {
        const tem3Jogadas =
          jogadas.filter(function (jogada) {
            return jogada[direcao] === i && jogada.jogador === jogador;
          }).length === 3;

        if (tem3Jogadas) {
          return jogador;
        }
      }
    }
  }
}

function verificarDiagonais(jogadas) {
  for (let jogador of [jogadorX, jogadorO]) {
    if (jogadas.x === jogadas.y && jogador === jogador) {
    }
    return jogador;
  }
}

// Dever de casa: implementar as diagonais

function verificarSeJogoTerminou(jogadas) {
  //  [0, 0] | [1, 0] | [2, 0]
  //  [0, 1] | [1, 1] | [2, 1]
  //  [0, 2] | [1, 2] | [2, 2]
  console.log(jogadas);

  if (jogadas.length >= 5) {
    // 1. Um linha inteira com o mesmo jogador
    // 2. Uma coluna inteira com o mesmo jogador
    // 3. Diagonais

    // curto circuito / short circuit
    // Retornar null, se nao houve vencedor -> valores falsos: null, undefined, 0, false
    // Retornar o vencedor, caso exista ->
    return verificarLinhasEColunas(jogadas) || verificarDiagonais(jogadas);
  }

  if (jogadas.length === 9) {
    return "EMPATE";
  } else {
    return null;
  }
}

// Se o jogo terminou;
// 1. Retorna o jogador vencedor, ou;
// 2. Retornar "EMPATE",
// 3. Retornar null se o jogo ainda nao terminou

// DICA: Se houveram 9 jogadas COM CERTEZA o jogo terminou

function App() {
  const [jogadorAtual, setJogadorAtual] = useState(jogadorX);
  const [jogadas, setJogadas] = useState([]);

  const processarJogada = (jogada) => {
    let proximoJogador;

    if (jogadorAtual === jogadorX) {
      proximoJogador = jogadorO;
    }

    if (jogadorAtual === jogadorO) {
      proximoJogador = jogadorX;
    }

    setJogadorAtual(proximoJogador);

    const novasJogadas = [...jogadas, jogada];
    setJogadas(novasJogadas);

    const vencedor = verificarSeJogoTerminou(novasJogadas);

    if (!vencedor) {
      return;
    }

    if (vencedor === "EMPATE") {
      alert("O JOGO EMPATOU!");
    } else {
      alert(`O JOGADOR ${vencedor} VENCEU!`);
    }
  };

  return (
    <>
      <div>JOGADOR ATUAL: {jogadorAtual}</div>
      <div>
        <Casa
          x={0}
          y={0}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={0}
          y={1}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={0}
          y={2}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
      </div>
      <div>
        <Casa
          x={1}
          y={0}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={1}
          y={1}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={1}
          y={2}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
      </div>
      <div>
        <Casa
          x={2}
          y={0}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={2}
          y={1}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
        <Casa
          x={2}
          y={2}
          jogadorAtual={jogadorAtual}
          onJogada={processarJogada}
        />
      </div>
    </>
  );
}

export default App;
