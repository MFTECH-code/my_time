import React from 'react'

export default function Header(props) {
    return (
        <header>
            <h1>My Time</h1>
            <p>Hora atual: {props.data}, {props.time}</p>
        </header>
    )
}
