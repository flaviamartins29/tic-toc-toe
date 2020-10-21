import React, { useState } from 'react';
import './App.css';

const jogadorX = 'X'
const jogadorO = 'O'
const ESPACO_EM_BRANCO = '-'

function Casa({ x, y, jogadorAtual, onJogada }) {
  const [jogador, setJogador] = useState(null)

  const efetuarJogada = () => {
    if (jogador !== null) {
      return
    }

    setJogador(jogadorAtual)
    onJogada({ x, y, jogador: jogadorAtual })
  }

  return <span className="casa">
    <button onClick={efetuarJogada}>
      {jogador || ESPACO_EM_BRANCO}
    </button>
  </span>
} 

// DEVER DE CASA: Vc não precisa mexer
// em NADA fora dessa função.
//
// O seu dever de casa não é de react, 
// é de logica de programação


function verificarSeJogoTerminou(jogadas) { 

  const jogadaBoa_01 = {x: 0, y: 1, x: 1, y: 1, x: 2, y: 1}
  const jogadaBoa_02 = {x: 0, y: 0, x: 1, y: 0, x: 2, y: 0}
  const jogadaBoa_03 = {x: 0, y: 2, x: 1, y: 2, x: 2, y: 2}
  const jogadaBoa_04 = {x: 0, y: 0, x: 1, y: 1, x: 2, y: 2}
  const jogadaBoa_05 = {x: 0, y: 2, x: 1, y: 1, x: 2, y: 0}
  const jogadaBoa_06 = {x: 0, y: 1, x: 1, y: 1, x: 2, y: 1}
    //const jogadaBoa_07 =
    //const jogadaBoa_08 =  


  if (jogadas.length >= 5 ){
    jogadas.map(game=>{
   
      if (jogadaBoa_01 || jogadaBoa_02 || jogadaBoa_03 || jogadaBoa_04  || jogadaBoa_05 || jogadaBoa_06 === game === "X" ){
        console.log("to aqui")
      }


    })

  if (jogadas.length === 9){
  
    alert('GAME OVER')

  }
}


console.log(jogadas)    
  return null

} 



      // Se o jogo terminou;
  // 1. Retorna o jogador vencedor, ou;
  // 2. Retornar "EMPATE",
  // 3. Retornar null se o jogo ainda nao terminou

  // DICA: Se houveram 9 jogadas COM CERTEZA o jogo terminou

function App() {
  const [jogadorAtual, setJogadorAtual] = useState(jogadorX)
  const [jogadas, setJogadas] = useState([])

  const processarJogada = (jogada) => {
    let proximoJogador

    if (jogadorAtual === jogadorX) {
      proximoJogador = jogadorO
    } 

    if (jogadorAtual === jogadorO) {
      proximoJogador = jogadorX
    }

    setJogadorAtual(proximoJogador)

    const novasJogadas = [...jogadas, jogada]
    setJogadas(novasJogadas)

    const vencedor = verificarSeJogoTerminou(novasJogadas)

    if (!vencedor) {
      return
    }

    if (vencedor === "EMPATE") {
      alert('O JOGO EMPATOU!')
    } else {
      alert(`O JOGADOR ${vencedor} VENCEU!`)
    }
  }

  return <>
    <div>
      JOGADOR ATUAL: {jogadorAtual}
    </div>
    <div >
      <Casa x={0} y={0} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={0} y={1} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={0} y={2} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
    </div>
    <div>
      <Casa x={1} y={0} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={1} y={1} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={1} y={2} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
    </div>
    <div>
      <Casa x={2} y={0} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={2} y={1} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
      <Casa x={2} y={2} jogadorAtual={jogadorAtual} onJogada={processarJogada}/>
    </div>
  </>
}

export default App;
