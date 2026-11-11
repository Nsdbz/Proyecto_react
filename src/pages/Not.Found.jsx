import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className="pagina-inicio">
			<h1>Página no encontrada</h1>
			<Link to="/">Volver al inicio</Link>
		</section>
	)
}
