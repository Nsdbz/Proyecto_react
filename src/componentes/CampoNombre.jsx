export default function CampoNombre({ valor, onCambio }) {
  return (
    <input 
      value={valor} 
      onChange={(evento) => onCambio(evento.target.value)} 
    />
  )
}