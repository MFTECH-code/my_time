import React, {useState} from 'react'


export default function App() {
  const [data, setData] = useState(new Date().toLocaleDateString())
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [marcacao, setMarcacao] = useState("inicio")
  const [tabelaMarcacoes, setTabelaMarcacoes] = useState([{
    tipoMarcacao: "----",
    timeMarcaco: "--:--:--"
  }])
  
  const marcacoes = []

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
    setData(new Date().toLocaleDateString())
  }, 1000)

  const solicitarMarcacao = () => {
    marcacoes.push({
      tipoMarcacao: marcacao,
      timeMarcaco: new Date().toLocaleTimeString()
    })  
  }

  return (
    <>
      <header>
        <h1>My Time</h1>
        <p>Hora atual: {data}, {time}</p>
      </header>

      <section>
        <h2>Bem vindo!</h2>
        <p>Solicite sua marcação!</p>
        <select value={marcacao} onChange={(e) => setMarcacao(e.target.value)}>
          <option value="inicio" key="inicio">Inicio</option>
          <option value="pausa" key="pausa">Pausa</option>
          <option value="fim" key="fim">Fim</option>
        </select>
        <button onClick={() => {
          solicitarMarcacao()
          setTabelaMarcacoes(marcacoes)
          }}>Marcar</button>

        <div>
          <p>{tabelaMarcacoes[0].tipoMarcacao} | {tabelaMarcacoes[0].timeMarcaco}</p>
        </div>
      </section>
    </>
  )
}

