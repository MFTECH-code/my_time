import React from 'react'
import "./Header.css"

export default function Header(props) {
    return (
        <header>
            <h1>My Time</h1>
            <p className="data">{props.data}</p>
            <p className="hora">{props.time}</p>
        </header>
    )
}
