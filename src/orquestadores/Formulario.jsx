import { useState } from 'react'
import './Formulario.css'

export default function Formulario({ onCrear }) {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [img, setImg] = useState('')
  const [precio, setPrecio] = useState('')

  return (
    <form
      className="formulario"
      onSubmit={(evento) => {
        evento.preventDefault()
        onCrear({ nombre, descripcion, img, precio })
      }}
    >
      <div className="formulario-campo">
        <label htmlFor="campo-nombre">Nombre del producto</label>
        <input
          id="campo-nombre"
          type="text"
          placeholder="Ej: Chocolate caliente"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          required
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="campo-descripcion">Descripción</label>
        <input
          id="campo-descripcion"
          type="text"
          placeholder="Una descripción corta"
          value={descripcion}
          onChange={(evento) => setDescripcion(evento.target.value)}
          required
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="campo-foto">URL de la foto</label>
        <input
          id="campo-foto"
          type="url"
          placeholder="https://ejemplo.com/foto.jpg"
          value={img}
          onChange={(evento) => setImg(evento.target.value)}
          required
        />
      </div>

      <div className="formulario-campo">
        <label htmlFor="campo-precio">Precio</label>
        <input
          id="campo-precio"
          type="number"
          min="0"
          step="0.01"
          placeholder="Ej: 4.50"
          value={precio}
          onChange={(evento) => setPrecio(evento.target.value)}
          required
        />
      </div>

      <button type="submit">Crear</button>
    </form>
  )
}