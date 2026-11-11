export default function CampoEdad({ valor, onCambio }) {
  return (
    <input 
      type="number"
      value={valor} 
      onChange={(evento) => onCambio(evento.target.value)} 
    />
  )
}