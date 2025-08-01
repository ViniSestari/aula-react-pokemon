import React from 'react'
import './Card.css'

function Card({ info }) {
  return (
    <div className="card">
      <img src={info.foto} alt={info.nome} />
      <div>{info.numero}</div>
      <div>{info.nome}</div>
      <div>{info.tipo}</div>
    </div>
  )
}
export default Card
