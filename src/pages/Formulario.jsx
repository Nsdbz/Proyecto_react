import { useNavigate } from 'react-router-dom'
import Formulario from '../orquestadores/Formulario'

export default function PaginaFormulario({ onCrear }) {
  const navegar = useNavigate()

  return (
    <section className="pagina-formulario">
      <h1>Crear tarjeta</h1>
      <Formulario
        onCrear={(tarjeta) => {
          onCrear(tarjeta)
          navegar('/tarjetas')
        }}
      />
    </section>
  )
}