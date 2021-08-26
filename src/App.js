import React, {useState} from 'react'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'


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
      <Header data={data} time={time}/>

      <Form 
        marcacao={marcacao}
        setMarcacao={setMarcacao} 
        tabelaMarcacoes={tabelaMarcacoes}
        setTabelaMarcacoes={setTabelaMarcacoes}
        marcacoes={marcacoes} 
        solicitarMarcacao={solicitarMarcacao}/>

        <Footer />
    </>
  )
}

