import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Tarjetas from './Tarjetas'
import PaginaFormulario from './Formulario'
import PaginaDesintegracion from './Desintegracion'
import NotFound from './Not.Found'
import data from '../data.json'

export default function App() {
	const [bebidas, setBebidas] = useState(data)

	const agregarBebida = (nueva) => {
		setBebidas([...bebidas, { ...nueva, id: Date.now() }])
	}

	return (
		<main className="aplicacion">
			<nav className="navegacion" aria-label="Navegación principal">
				<NavLink to="/" end>Inicio</NavLink>
				<NavLink to="/tarjetas">Tarjetas</NavLink>
				<NavLink to="/formulario">Formulario</NavLink>
				<NavLink to="/desintegracion">Desintegración</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tarjetas" element={<Tarjetas bebidas={bebidas} />} />
				<Route path="/formulario" element={<PaginaFormulario onCrear={agregarBebida} />} />
				<Route path="/desintegracion" element={<PaginaDesintegracion />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	)
}