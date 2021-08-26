import React from 'react'
import "./Form.css"

export default function Form(props) {
    return (
        <section>
            <h2>Bem vindo!</h2>
            <p>Solicite sua marcação!</p>
            <div className="formulario">
                <select value={props.marcacao} onChange={(e) => props.setMarcacao(e.target.value)}>
                    <option value="inicio" key="inicio">Inicio</option>
                    <option value="pausa" key="pausa">Pausa</option>
                    <option value="fim" key="fim">Fim</option>
                </select>
                <button onClick={() => {
                    props.solicitarMarcacao()
                    props.setTabelaMarcacoes(props.marcacoes)
                }}>Marcar</button>
            </div>

            <div className="conteudo">
                <p>{props.tabelaMarcacoes[0].tipoMarcacao} | {props.tabelaMarcacoes[0].timeMarcaco}</p>
            </div>
        </section>
    )
}
