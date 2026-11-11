import Tarjeta from '../orquestadores/tarjeta'

export default function Tarjetas({ bebidas }) {
	return (
		<section>
			<h1>Tarjetas</h1>
			<div className="catalogo">
				{bebidas.map((bebida) => (
					<Tarjeta
						key={bebida.id}
						nombre={bebida.nombre}
						img={bebida.img}
						descripcion={bebida.descripcion}
						precio={bebida.precio}
					/>
				))}
			</div>
		</section>
	)
}