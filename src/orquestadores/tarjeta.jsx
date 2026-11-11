import Imagen from '../componentes/imagen'
import Nombre from '../componentes/nombre'
import Descripcion from '../componentes/descripcion'
import Precio from '../componentes/precio'
import './tarjeta.css'
import { useState } from 'react'

export default function Tarjeta({ nombre, descripcion, img, precio }) {
    const [likes, setLikes] = useState(0)
    return (
        <div className="tarjeta">
            <Imagen img={img} />
            <Nombre nombre={nombre} />
            <Descripcion descripcion={descripcion} />
            {precio && <Precio precio={`$${precio}`} />}
            <button onClick={() => setLikes(likes + 1)}>
              ❤️ {likes}
            </button>
        </div>
    )
}